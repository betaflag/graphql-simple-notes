import React from "react";
import { FiTrash, FiArrowLeft } from "react-icons/fi";
import {
  useNoteQuery,
  useDeleteNoteMutation,
  NotesDocument,
  NotesQuery
} from "../../../../generated/graphql";
import Button from "../../../Button";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import "./NoteEditor.css";
import { useApolloClient } from "@apollo/react-hooks";

function NoteEditor({ id }: { id: string }) {
  const apolloClient = useApolloClient();

  const { data } = useNoteQuery({ variables: { id } });

  const [deleteNote] = useDeleteNoteMutation({
    update(cache, { data }) {
      // delete the note from the cache
      if (!data || !data.deleteNote) return;
      const cached = cache.readQuery<NotesQuery>({ query: NotesDocument });
      cache.writeQuery({
        query: NotesDocument,
        data: {
          selectedNote: null,
          notes: cached?.notes.filter(note => note.id !== id)
        }
      });
    }
  });

  if (!data) return null;

  return (
    <div className="editor-container">
      <div className="editor-mobile-menu">
        <div>
          <FiArrowLeft
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              cursor: "pointer"
            }}
            onClick={() =>
              apolloClient.writeData({ data: { selectedNote: null } })
            }
          />
        </div>
        <div>
          <Button onClick={() => deleteNote({ variables: { id } })}>
            <FiTrash />
          </Button>
        </div>
      </div>
      <div className="editor-header">
        <div className="editor-header-title">
          <TitleInput note={data.note} />
        </div>
        <div className="editor-header-menu">
          <Button onClick={() => deleteNote({ variables: { id } })}>
            <FiTrash /> Delete
          </Button>
        </div>
      </div>
      <div className="editor-content">
        <ContentInput note={data.note} />
      </div>
    </div>
  );
}

export default NoteEditor;
