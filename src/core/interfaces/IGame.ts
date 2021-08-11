import GameComment from "@interfaces/IGameComment";

interface IGame {
  title: string;
  description: string;
  price: number;
  stars: number;
  bannerImage: string;
  gameCaptures: string[];
  categories: string[];
  comments: GameComment[];
}

export default IGame;
