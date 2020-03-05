import { gql } from "apollo-server";

const typeDefs = gql`
  scalar DateTime

  type Note {
    id: ID!
    title: String!
    content: String!
    date: DateTime!
  }

  input CreateNoteInput {
    title: String!
    content: String!
  }

  input UpdateNoteInput {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    notes(query: String): [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    createNote(input: CreateNoteInput!): Note!
    updateNote(input: UpdateNoteInput!): Note!
    deleteNote(id: ID!): Boolean
  }
`;

export default typeDefs;
