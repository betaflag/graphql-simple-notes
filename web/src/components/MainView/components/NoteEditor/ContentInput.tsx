import React, { useState, useEffect } from "react";
import { Note, useUpdateNoteMutation } from "../../../../generated/graphql";

interface Props {
  note: Note;
}

function ContentInput({ note }: Props) {
  const [noteId, setNoteId] = useState(note.id);
  const [content, setContent] = useState(note.content);
  const [updateNote] = useUpdateNoteMutation();

  useEffect(() => {
    // only update the input when note is changed to prevent typing race condition
    if (noteId === note.id) return;
    setNoteId(note.id);
    setContent(note.content);
  }, [note.content, note.id, noteId]);

  return (
    <textarea
      className="editor-input"
      value={content}
      placeholder="Content"
      onChange={e => {
        setContent(e.target.value);
        const { id, title } = note;
        const input = { id, title, content: e.target.value };
        updateNote({ variables: { input } });
      }}
    />
  );
}

export default ContentInput;
