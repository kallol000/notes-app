import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
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
import { listNoteBooks } from "./graphql/queries";
import {
  createNoteBook,
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  

  // All states
  const [notes, setNotes] = useState([]);

  const [openDrawer, setOpenDrawer] = useState(true)


  // All functions
  const handleOpen = () => setOpenDrawer(prevState => !prevState)

  const handleShowNotes = async() => {
    const apiData = await API.graphql({query: listNoteBooks})
    console.log(apiData.data.listBlogs)
  }


  return (
    <View className="App">
    
      <Drawer
        open = {openDrawer}
      >
        <h1>Passwords</h1>
        <h1>Travel Ideas</h1>
      </Drawer>
      
      <section >
        <Navbar 
          open = {openDrawer}
          handleOpen = {handleOpen}
        />
        <button onClick = {handleShowNotes}>create</button>
      </section>        
      

      
      

    </View>
    
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
