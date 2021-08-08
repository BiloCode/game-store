import GameComment from "@interfaces/IGameComment";

interface IGame {
  title: string;
  description: string;
  price: number;
  stars: number;
  bannerImage: string;
  captures: string[];
  categories: string[];
  comments: GameComment[];
}

export default IGame;
