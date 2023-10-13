import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";

import toast, { Toaster } from 'react-hot-toast';

import { Route, Routes, Outlet } from "react-router-dom";

import Layout from "../components/Layout";
import Notebook from "./Notebook";
import Home from "./Home";
import Note from "./Note";

import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { ListNoteBooks, GetNoteBook, GetNote } from "../graphql/queries";
import { CreateNoteBook, DeleteNoteBook, CreateNote, DeleteNote } from "../graphql/mutations";
import { Create } from "@mui/icons-material";

const App = ({ signOut }) => {
  

  // All states

  const [refresh, setRefresh] = useState(false)

  const [isNewUser, setIsNewUser] = useState(true)

  const [noteBooks, setNoteBooks] = useState([])
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(false)

  const [openDrawer, setOpenDrawer] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)


  // All functions
  const handleOpenDrawer = () => setOpenDrawer(prevState => !prevState)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)



  // API functions
  const getNoteBooks = async () => {
    setLoading(true)
    try{
      const res = await API.graphql({query: ListNoteBooks})
      // console.log(res)
      if(res.data.listNoteBooks.items.length > 0){
        setIsNewUser(false)
        setNoteBooks(prevNoteBooks => res.data.listNoteBooks.items)
      }  
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
    
    
  }

  const handleGetNotebook = async() => {
    const id = "723fb80c-a6d1-46ce-89b5-abf3d5877ae6"
    const res = await API.graphql({
      query: GetNoteBook,
      variables: {id: id}
    })

    console.log(res.data.getNoteBook)

  }

  const handleGetNote = async () => {
    const id = "6a3c242c-0546-41a0-85c7-40c8787ffb0f"

    const res = await API.graphql({
      query: GetNote,
      variables: {id: id}
    })
  
    console.log(res.data.getNote)
  }

  const handleCreateNoteBook = async (data) => {

    try{
      const res = await API.graphql({
        query: CreateNoteBook,
        variables: {input: data}
      })
      setIsModalOpen(false)
      const notify = () => toast.success(`Notebook successfully created`)
      notify()
      setRefresh(!refresh)

    }catch(err){
      console.log(err)
    }
  }



  const handleCreateNote = async () => {
    const data = {
      name: 'Iceland',
      description: 'volcano, waterfalls',
      notebookID: "723fb80c-a6d1-46ce-89b5-abf3d5877ae6"
    }

    const res = await API.graphql({
      query: CreateNote,
      variables: {input: data}
    })

  }


  const handleDeleteNoteBook = async () => {
    const data = {id: "8c2cf0d1-b199-4253-a5b7-2cafc567a82c"}

    const res = await API.graphql({
      query: DeleteNoteBook,
      variables: {input: data}
    })

    console.log(res)
  }

  useEffect(() => {
    getNoteBooks()
  },[refresh])


  const handleDeleteNote = async () => {
    const data = {id: "4b27f904-6804-4a0a-91b3-04273d5141d6"}

    const res = await API.graphql({
      query: DeleteNote,
      variables: {input: data}
    })

    console.log(res)
  }


  return (
    <>
      <Routes>
        <Route path = '/' element = {<Layout open = {openDrawer} handleOpen = {handleOpenDrawer}/>}>
          <Route index element = {<Home isNewUser = {isNewUser} loading = {loading} noteBooks = {noteBooks} isOpen = {isModalOpen} handleOpen = {handleOpenModal} handleClose = {handleCloseModal} getNotebook = {handleGetNotebook} getNote = {handleGetNote} createNoteBook = {handleCreateNoteBook} createNote = {handleCreateNote} deleteNoteBook = {handleDeleteNoteBook} deleteNote = {handleDeleteNote} />}/>
          <Route path=":noteBookId" element = {<Notebook loading = {loading} setLoading = {setLoading} />} />
          <Route path=":noteBookId/:noteId" element = {<Note />} />
        </Route>
      </Routes>
      <Toaster />
        {/* <Drawer
          open = {openDrawer}
        >
        </Drawer>
        <main>
          <Routes>
            <Route 
              path = '/' 
              element = {<Navbar 
                open = {openDrawer}
                handleOpen = {handleOpen}
              />}
            />
          </Routes>
          
        <Outlet /> 
        </main> */}
        
      
      
    </>    
    
  );
};

export default withAuthenticator(App);



  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // console.log(API.graphql({ query: listNotes }))

  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   console.log(apiData.data.listNotes.items)
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   await Promise.all(
  //     notesFromAPI.map(async (note) => {
  //       if (note.image) {
  //         const url = await Storage.get(note.name);
  //         note.image = url;
  //       }
  //       return note;
  //     })
  //   );
  //   setNotes(notesFromAPI);
  // }

  // // console.log(API)

  // async function handleClick(){
  //   const data = {
  //     name: 'my 3rd notebook'
  //   }
  //   await API.graphql({
  //       query: createNoteBook,
  //       variables: {input: data}
  //   })
  // }


  // async function handleCreateNote(){
  //   const data = {
  //     name: 'test',
  //     description: 'this is a test note',
  //     // noteBook: NoteBook
  //   }
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: {input: data}
  //   })

  // }

  // async function handleShow(){
  //   const noteBookData = await API.graphql({query: listNoteBooks})
  //   // const data = JSON.parse(noteBookData)
    
  //   // const notesData = await API.graphql({query: listNotes})
  //   console.log(noteBookData)
  // }

  // async function handleDelete(){
    
  // }
  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const image = form.get("image");
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //     image: image.name,
  //   };
  //   if (!!data.image) await Storage.put(data.name, image);
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }

  // async function deleteNote({ id, name }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await Storage.remove(name);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }
