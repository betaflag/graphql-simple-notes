import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import NotesList from "./components/NotesList";
import CreateNoteButton from "./components/CreateNoteButton";
import { useNotesQuery } from "../../generated/graphql";
import { useApolloClient } from "@apollo/react-hooks";
import { useMediaQuery } from "react-responsive";
import "./Sidebar.css";

function Sidebar() {
  const apolloClient = useApolloClient();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { data, refetch } = useNotesQuery();
  const [query, setQuery] = useState("");

  useEffect(() => {
    // automatically select the first note of the list if not on mobile
    if (isMobile || !data?.notes.length || data.selectedNote) return;
    apolloClient.writeData({ data: { selectedNote: data.notes[0].id } });
  }, [data, apolloClient, isMobile]);

  useEffect(() => {
    // refetch the notes when the search query changes
    refetch({ query: query.length ? query : undefined });
  }, [query, refetch]);

  // sorts the note by date. They are sorted on the server but we sometimes change cached date
  const notes = data?.notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // show the menu on mobile when there's no note selected
  const style = { display: isMobile && data?.selectedNote ? "none" : "flex" };

  return (
    <div className="sidebar" style={style}>
      <div className="sidebar-header">
        <div className="sidebar-search">
          <SearchInput
            placeholder="search"
            style={{ width: "100%" }}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div>
          <CreateNoteButton onCreated={() => setQuery("")} />
        </div>
      </div>

      {data && notes && (
        <NotesList notes={notes} selectedNote={data.selectedNote} />
      )}
    </div>
  );
}

export default Sidebar;
