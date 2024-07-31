import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "66a8b72b5ec17c92ae3dcd331",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T09:49:31.168Z",
      __v: 0,
    },

    {
      _id: "66a8d849e057098d4440f8645",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:49.042Z",
      __v: 0,
    },

    {
      _id: "66a8d84ae057098d4440f864b",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:50.694Z",
      __v: 0,
    },
    {
      _id: "66a8b72b5e4c7c92ae3dcd331",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T09:49:31.168Z",
      __v: 0,
    },

    {
      _id: "66a8d849e057098d440f84645",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:49.042Z",
      __v: 0,
    },

    {
      _id: "66a84d84ae057098d440f864b",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:50.694Z",
      __v: 0,
    },
    {
      _id: "66a8b72b45ec7c92ae3dcd331",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T09:49:31.168Z",
      __v: 0,
    },

    {
      _id: "66a8d849e0570498d440f8645",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:49.042Z",
      __v: 0,
    },

    {
      _id: "664a8d84ae057098d440f864b",
      user: "66a766baa12471f85256d5d0",
      title: "My title",
      description: "Plese i need a job",
      tag: "personal",
      date: "2024-07-30T12:10:50.694Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
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
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = (id, title, description, tag) => {
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
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
