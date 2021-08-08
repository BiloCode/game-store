import { firestore } from "@/firebase-service";

import GameConverter from "@converter/GameConverter";

class GetGameById {
  public static async get(id: string) {
    const document = await firestore
      .collection("game")
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
