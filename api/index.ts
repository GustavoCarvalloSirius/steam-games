import { get } from "./utils";
import {Game} from "../types";

export const getAllGames = (): Promise<Game[]> => {
  return get("https://api.github.com/gists/5dd618bf13ac76cebfa08c0e3c99b677")
    .then((response) => {
      const content = response?.files["games.json"]?.content;
      if(content) return JSON.parse(content)
    })
};
