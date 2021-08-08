import firebase from "firebase";

import IGame from "@interfaces/IGame";
import IGameComment from "@interfaces/IGameComment";

class Game implements IGame {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly stars: number,
    readonly bannerImage: string,
    readonly captures: string[],
    readonly categories: string[],
    readonly comments: IGameComment[]
  ) {}
}

const GameConverter = {
  toFirestore(gameData: Game) {
    return { ...gameData };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Game {
    const data = snapshot.data(options)!;
    return new Game(
      data.title,
      data.description,
      data.price,
      data.stars,
      data.bannerImage,
      data.captures,
      data.categories,
      data.comments
    );
  }
};

export default GameConverter;
