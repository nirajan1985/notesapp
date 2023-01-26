import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FunctionComponent<INotesListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderedNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes note={note} key={note.id} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3">Notes list </h2>
      <div>{renderedNotes()}</div>
    </>
  );
};

export default NotesList;
