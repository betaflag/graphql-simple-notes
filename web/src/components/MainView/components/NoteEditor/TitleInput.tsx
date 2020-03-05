import React, { useState, useEffect } from "react";
import { Note, useUpdateNoteMutation } from "../../../../generated/graphql";

interface Props {
  note: Note;
}

function TitleInput({ note }: Props) {
  const [noteId, setNoteId] = useState(note.id);
  const [title, setTitle] = useState(note.title);
  const [updateNote] = useUpdateNoteMutation();

  useEffect(() => {
    // only update the input when note is changed to prevent typing race condition
    if (noteId === note.id) return;
    setNoteId(note.id);
    setTitle(note.title);
  }, [note.title, note.id, noteId]);

  return (
    <input
      className="editor-input"
      type="text"
      value={title}
      placeholder="Title"
      onChange={e => {
        setTitle(e.target.value);
        const { id, content } = note;
        updateNote({
          variables: { input: { id, content, title: e.target.value } }
        });
      }}
    />
  );
}

export default TitleInput;
