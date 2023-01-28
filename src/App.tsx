import React, { useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Ordering",
      text: "Oder cake for Dipsan birthday",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>

        <Row>
          <Col>
            <CreateNotes />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
