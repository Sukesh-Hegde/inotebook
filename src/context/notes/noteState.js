import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Note
  const getNotes = async () => {
    // TODO: API Call
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmE3NjZiYWExMjQ3MWY4NTI1NmQ1ZDAiLCJlbWFpbCI6InN1a2hAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQxNDMyLCJleHAiOjE3MjI5ODk0MzJ9.X63Q1Ufnv-X-iR_Tsb2KK7TcvW2ON9K3ODLKJLd7lqY",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmE3NjZiYWExMjQ3MWY4NTI1NmQ1ZDAiLCJlbWFpbCI6InN1a2hAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQxNDMyLCJleHAiOjE3MjI5ODk0MzJ9.X63Q1Ufnv-X-iR_Tsb2KK7TcvW2ON9K3ODLKJLd7lqY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmE3NjZiYWExMjQ3MWY4NTI1NmQ1ZDAiLCJlbWFpbCI6InN1a2hAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQxNDMyLCJleHAiOjE3MjI5ODk0MzJ9.X63Q1Ufnv-X-iR_Tsb2KK7TcvW2ON9K3ODLKJLd7lqY",
      },
    });
    const json = await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmE3NjZiYWExMjQ3MWY4NTI1NmQ1ZDAiLCJlbWFpbCI6InN1a2hAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQxNDMyLCJleHAiOjE3MjI5ODk0MzJ9.X63Q1Ufnv-X-iR_Tsb2KK7TcvW2ON9K3ODLKJLd7lqY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    //logic to edit in client

    let newNotes = JSON.parse(JSON.stringify(notes)); //creating deep copy of notes, because we cant directly update in react
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
