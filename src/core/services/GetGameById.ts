import { firestore } from "@/firebase-service";

import GameConverter from "@converter/GameConverter";
import FirebaseCollections from "@localtypes/FirebaseCollections";

class GetGameById {
  public static async get(id: string) {
    const document = await firestore
      .collection(FirebaseCollections.GAME)
      .doc(id)
      .withConverter(GameConverter)
      .get();

    if (!document.exists) {
      throw new Error("Document not exists");
    }

    return document.data();
  }
}

export default GetGameById;
