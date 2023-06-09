import { useState } from "react";
import { TextField } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea() {
  const [newNote, setNote] = useState({
    email: "",
    title: "",
    body: "",
  });
  const [onFocused, setOnFocused] = useState(false);

  function handleChange(event) {
    const user = JSON.parse(localStorage.getItem("user"));

    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        email: user.username,
        [name]: value,
      };
    });
  }
  async function submitNote(event) {
    event.preventDefault();
    const email = newNote.email;
    const title = newNote.title;
    const body = newNote.body;
    await fetch("http://127.0.0.1:3000/api/newnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, title: title, body: body }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  }

  function handleFocused() {
    setOnFocused(true);
  }

  return (
    <div className="createContainer">
      <Paper elevation={3}>
        <form onSubmit={submitNote}>
          {onFocused && (
            <TextField
              variant="standard"
              name="title"
              value={newNote.title}
              placeholder="Title"
              onChange={handleChange}
              onFocus={handleFocused}
              className="createInputField"
            />
          )}
          <TextField
            variant="filled"
            name="body"
            value={newNote.body}
            multiline={true}
            placeholder="New note"
            minRows={onFocused ? 5 : 1}
            onFocus={handleFocused}
            onChange={handleChange}
            className="createInputField"
          />
          {onFocused && (
            <Button type="submit" className="createButton">
              <AddIcon color="warning" fontSize="large" />
            </Button>
          )}
        </form>
      </Paper>
    </div>
  );
}
