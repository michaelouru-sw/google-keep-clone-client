import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea() {
  const [newNote, setNote] = useState({
    title: "",
    body: "",
  });
  const [onFocused, setOnFocused] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  async function submitNote(event) {
    event.preventDefault();
    const { title, body } = newNote;
    const response = await fetch("http://localhost:3000/api/newnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, body: body }),
    });
    if (response.statusCode === 200) {
      window.location.reload();
    } else {
      console.log(response);
    }
    console.log(title, body);
  }
  function handleFocused() {
    setOnFocused(true);
  }
  function handleBlur() {
    setOnFocused(false);
  }

  // function submitNote() {
  //   useEffect(
  //     fetch("http://localhost:3000/api/newnote", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newNote),
  //     })
  //   );
  //   console.log(newNote);
  // }

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
