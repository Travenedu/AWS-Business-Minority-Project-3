import React, { useState, useEffect, FormEvent } from "react";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { listNotes } from "../src/graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../src/graphql/mutations";
//import { CreateNoteInput, Note } from "@/src/API";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
//import awsconfig from "@/src/amplifyconfiguration.json";

//Amplify.configure(awsconfig);

const client = generateClient();

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    const form = event.target;

    event.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      description: formData.get("description")
    };

    await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });

    await fetchNotes();

    form.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);

    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);