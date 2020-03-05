import { Context } from "../../App";
import { Collection, ObjectId } from "mongodb";

interface Props {
  id: string;
}

export class DeleteNote {
  collection: Collection;

  constructor(private props: Props, { db }: Context) {
    this.collection = db.collection("notes");
  }

  perform() {
    return this.collection
      .deleteOne({ _id: new ObjectId(this.props.id) })
      .then(result => result.result.n === 1);
  }
}
