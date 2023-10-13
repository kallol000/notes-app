import { Link, useParams } from "react-router-dom"

export default function Note(){

    const { noteId } = useParams() 

    return(
        <div>
            <Link to = '..' relative="path">back to </Link>
            <div>Note info goes here</div>
        </div>
    )
}