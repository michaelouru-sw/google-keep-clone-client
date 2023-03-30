import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./Createarea";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  // Get logged user
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const username = user.email;

  //   useEffect(
  //     fetch("http://localhost:3000/app/notes", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: username,
  //       }),
  //     })
  //   );

  return (
    <div>
      <Header />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}
