import GameComment from "@interfaces/IGameComment";

interface IGame {
  id: string;
  title: string;
  description: string;
  price: number;
  stars: number;
  discount: number;
  bannerImage: string;
  gameCaptures: string[];
  categories: string[];
  comments: GameComment[];
}

export default IGame;
