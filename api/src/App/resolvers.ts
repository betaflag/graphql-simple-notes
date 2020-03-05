import { IResolvers } from "apollo-server";
import Context from "./Context";
import {
  FindNotes,
  FindNote,
  CreateNote,
  UpdateNote,
  DeleteNote
} from "../services/notes";

const resolvers: IResolvers<any, Context> = {
  Query: {
    notes: (_, params, context) => new FindNotes(params, context).perform(),
    note: (_, params, context) => new FindNote(params, context).perform()
  },
  Note: { id: root => root.id || root._id },
  Mutation: {
    createNote: (_, { input }, context) =>
      new CreateNote(input, context).perform(),
    updateNote: (_, { input }, context) =>
      new UpdateNote(input, context).perform(),
    deleteNote: (_, params, context) =>
      new DeleteNote(params, context).perform()
  }
};

export default resolvers;
