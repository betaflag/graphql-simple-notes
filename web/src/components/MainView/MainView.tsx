import React from "react";
import { useSelectedNoteQuery } from "../../generated/graphql";
import NoteEditor from "./components/NoteEditor";
import { useMediaQuery } from "react-responsive";
import "./MainView.css";

function MainView() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { data } = useSelectedNoteQuery();

  // hide the view on mobile when there's no note selected
  const style = { display: isMobile && !data?.selectedNote ? "none" : "block" };

  return (
    <div className="main-view" style={style}>
      {data && data.selectedNote && <NoteEditor id={data.selectedNote} />}
    </div>
  );
}

export default MainView;
