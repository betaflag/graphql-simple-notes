import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { Note } from "../../../../generated/graphql";
import "./NotesList.css";

interface Props {
  notes: Note[];
  selectedNote?: string | null;
}

function NotesList({ notes, selectedNote }: Props) {
  const apolloClient = useApolloClient();

  return (
    <ul className="list">
      {notes.map(note => (
        <li
          key={note.id}
          className={selectedNote === note.id ? "selected" : ""}
          onClick={() =>
            apolloClient.writeData({ data: { selectedNote: note.id } })
          }
        >
          <div className="list-title">{note.title}</div>
          <div className="list-description">
            {new Date(note.date).toISOString().split("T")[0]}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
