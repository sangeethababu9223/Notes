/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import DetailNote from "../detailNote/detailNote";
import "./listNote.scss";
const ListNote = () => {
  const [notes, setNotes] = useState([]);
  const style = css`
    color: hotpink;
  `;
  const color = "white";
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/notes`)
      .then((results) => results.json())
      .then((results) => {
        const { data } = results;
        setNotes(data);
      });
  }, [notes]);

  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "green",
        },
      }}
    >
      <h1>Notes</h1>
      {notes.map((note, index) => {
        return <DetailNote key={index} note={note} />;
      })}
    </div>
  );
};

export default ListNote;
