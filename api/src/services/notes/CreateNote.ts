import { Context } from "../../App";
import { Collection } from "mongodb";

interface Props {
  title: string;
  content: string;
}

export class CreateNote {
  collection: Collection;

  constructor(private props: Props, { db }: Context) {
    this.collection = db.collection("notes");
  }

  async perform() {
    const data = { ...this.props, date: new Date() };
    return this.collection.insertOne(data).then(() => data);
  }
}
