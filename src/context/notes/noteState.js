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
    const json = await response.json()
    setNotes(json)
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
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NmE3NjZiYWExMjQ3MWY4NTI1NmQ1ZDAiLCJlbWFpbCI6InN1a2hAZ21haWwuY29tIiwiaWF0IjoxNzIyMzQxNDMyLCJleHAiOjE3MjI5ODk0MzJ9.X63Q1Ufnv-X-iR_Tsb2KK7TcvW2ON9K3ODLKJLd7lqY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
