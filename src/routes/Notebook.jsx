import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { GetNoteBook } from "../graphql/queries"
import { API } from "aws-amplify"
import { ThreeDots } from "react-loader-spinner"
import styles from './css modules/home.module.css'


export default function Notebook(){

    

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    const { noteBookId } = useParams()

    const fetchNotes = async () => {
        setLoading(true)
        try{
            const res = await API.graphql({
                query: GetNoteBook,
                variables: {id: noteBookId}
            })
            console.log(res)
            setNotes(prevNotes => res.data.getNoteBook.Notes.items)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const notesElements = notes.map(note => 
        <div key={note.id}>
            <Link to={note.id}>{note.name}</Link>
        </div>)


    useEffect(() => {
        fetchNotes()
    }, [])


    if(loading){
        return (
            <div className={styles.home}>
                <ThreeDots />
            </div>
        )
    }

    return(
        <div className={styles.homeGrid}>
            <Link to = '..'>back to all notebooks</Link>
            <button className="btn-primary">Create a new Note</button>
            {notesElements}
        </div>
    )
}