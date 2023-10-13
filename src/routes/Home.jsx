import styles from './css modules/home.module.css'
import Modal from '../components/Modal'
import { ThreeDots } from 'react-loader-spinner'
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from 'react-router-dom';
import Notebook from './Notebook';
import { useState } from 'react';
import { CreateNoteBook } from '../graphql/mutations';

export default function Home({ isNewUser, isOpen, loading, handleOpen, handleClose, noteBooks, getNotebook, getNote, createNoteBook, createNote, deleteNoteBook, deleteNote }){

    const [formData, setFormData] = useState({})
    
    const noteBookDivs = noteBooks.map(noteBook => (
        <div key = {noteBook.id} className = 'notebook'>
            <div className='notebook-header'>
                <EditNoteIcon />
                <Link to = {noteBook.id}>{noteBook.name}</Link>
            </div>
            <div className='notebook-footer'>
                <p>Notes: {noteBook.Notes.items.length}</p>
                <p>Last modified: Sep 23rd</p>
            </div>
        </div>))

    
    const handleChange = (e) => {
        setFormData(prevFormData => ({[e.target.name]:e.target.value}))
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    if(loading){
        return (
        <div className={styles.home}>
            <ThreeDots />
        </div>
        )
    }

    return(
        <div >
            {isNewUser && 
            <>
                <h1>Welcome to NOTERIOUS!</h1>
                <h3>Start off by creating your first Notebook</h3>
            </>}

            <div className={styles.homeGrid}>
                <button className={`${styles.gridStart} btn-primary`} onClick={() => handleOpen()}>Create a Notebook</button>
                { noteBookDivs }
            </div>
           
            {isOpen && 
                <Modal isOpen = {isOpen} handleClose = { handleClose }>
                    <input type='text' name='name' value={formData.noteBook} placeholder='Name of your Notebook' onChange={handleChange}/>
                    <button className='btn-primary' onClick={() => createNoteBook(formData)}>Submit</button>
                </Modal>}
            {/* <button onClick = {getNotebook}>Get 1st Notebook</button>
            <button onClick = {getNote}>Get 1st Note</button>
            <button onClick = {createNoteBook}>Create Notebook</button>
            <button onClick = {createNote}>Create Note</button>
            <button onClick = {deleteNoteBook}>Delete NoteBook</button>
            <button onClick = {deleteNote}>Delete Note</button> */}

        </div>
    )
}