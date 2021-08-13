import firebase from "firebase";

import IGame from "@interfaces/IGame";
import IGameComment from "@interfaces/IGameComment";

class Game implements IGame {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly stars: number,
    readonly bannerImage: string,
    readonly gameCaptures: string[],
    readonly categories: string[],
    readonly comments: IGameComment[],
    readonly discount: number
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
      snapshot.id,
      data.title,
      data.description,
      data.price,
      data.stars,
      data.bannerImage,
      data.gameCaptures,
      data.categories,
      data.comments,
      data.discount
    );
  }
};

export default GameConverter;
