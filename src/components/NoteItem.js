import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  const shareOnWhatsApp = () => {
    const message = `Title: ${note.title}\nDescription: ${note.description}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => deleteNote(note._id)}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => updateNote(note)}
            ></i>
            <i className="fab fa-whatsapp mx-2" onClick={shareOnWhatsApp}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
