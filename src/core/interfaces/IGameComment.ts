interface GameComment {
  createdAt: string;
  message: string;
  user: {
    username: string;
    image: string;
  };
}

export default GameComment;
