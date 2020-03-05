import React from "react";
import Button from "../../../Button";
import { FiEdit } from "react-icons/fi";
import {
  useCreateNoteMutation,
  NotesDocument,
  NotesQuery,
  Note
} from "../../../../generated/graphql";

interface Props {
  onCreated?: (note: Note) => any;
}

function CreateNoteButton({ onCreated }: Props) {
  const [createNote] = useCreateNoteMutation({
    update(cache, { data }) {
      // update the cache whith the newly created note
      if (!data) return;
      const cached = cache.readQuery<NotesQuery>({ query: NotesDocument });
      cache.writeQuery({
        query: NotesDocument,
        data: {
          selectedNote: data?.createNote.id,
          notes: [data.createNote, ...(cached?.notes || [])]
        }
      });
      // trigger onCreated to notify the parent
      if (onCreated) onCreated(data.createNote);
    }
  });

  return (
    <Button
      shape="circle"
      onClick={() =>
        createNote({ variables: { input: { title: "New note", content: "" } } })
      }
    >
      <FiEdit />
    </Button>
  );
}

export default CreateNoteButton;
