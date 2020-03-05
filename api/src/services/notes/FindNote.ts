import { Context } from "../../App";
import { Collection, ObjectId } from "mongodb";

interface Props {
  id: string;
}

export class FindNote {
  collection: Collection;

  constructor(private props: Props, { db }: Context) {
    this.collection = db.collection("notes");
  }

  perform() {
    return this.collection.findOne({ _id: new ObjectId(this.props.id) });
  }
}
