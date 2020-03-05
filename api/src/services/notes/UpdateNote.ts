import { Context } from "../../App";
import { Collection, ObjectId } from "mongodb";

interface Props {
  id: string;
  title: string;
  content: string;
}

export class UpdateNote {
  collection: Collection;

  constructor(private props: Props, { db }: Context) {
    this.collection = db.collection("notes");
  }

  async perform() {
    const { id, title, content } = this.props;

    const data = { title, content, date: new Date() };

    return this.collection
      .updateOne({ _id: new ObjectId(id) }, { $set: data })
      .then(() => ({ ...data, id }));
  }
}
