import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";

export type ImageMap = {
  [key in "rock" | "paper" | "scissors"]: string;
};

const images: ImageMap = {
  rock: rock as string,
  paper: paper as string,
  scissors: scissors as string,
};

export default images;
