import { Context } from "../../App";
import { Collection } from "mongodb";

interface Props {
  query: string;
}

export class FindNotes {
  collection: Collection;

  constructor(private props: Props, { db }: Context) {
    this.collection = db.collection("notes");
  }

  perform() {
    const { query } = this.props;
    const findQuery = query ? { $text: { $search: query } } : undefined;

    return this.collection
      .find(findQuery)
      .sort({ date: -1 })
      .toArray();
  }
}
