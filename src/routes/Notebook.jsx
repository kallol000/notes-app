import { useParams } from "react-router-dom"

export default function Notebook(){

    const { noteBookId } = useParams()

    console.log(noteBookId)

    return(
        <div className="notebook-home">Notes related to a notebook goes here</div>
    )
}