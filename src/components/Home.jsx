import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./Createarea";
import { useEffect } from "react";
import { useState } from "react";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const userAuthenticated = localStorage.getItem("userAuthenticated");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:3000/api/notes/" + storedUser.username)
      .then((response) => response.json())
      .then((receivedNotes) => {
        setNotes(receivedNotes.notes);
      })
      .catch((error) => console.log(error));
  }, []);

  function reloadPage() {
    window.location.reload();
  }

  async function deleteNote(id) {
    await fetch("http://localhost:3000/api/note/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          console.log("There was an error deleting the note");
        }
        return response.json();
      })
      .then((data) => {
        reloadPage();
      })
      .catch((error) => console.log(error));
  }

  return userAuthenticated ? (
    <div>
      <Header userAuthenticated={userAuthenticated} />
      <CreateArea />
      {notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            body={note.body}
            id={note._id}
            key={note._id}
            index={index + 1}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  ) : (
    (window.location.href = "/login")
  );
}
