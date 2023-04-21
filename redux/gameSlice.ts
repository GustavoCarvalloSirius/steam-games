import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types";

export interface GameState {
  games: Game[];
  gamesLoading: boolean;
  gamesError: boolean;
}

const initialState: GameState = {
  games: [],
  gamesLoading: false,
  gamesError: false,
};
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
      state.gamesLoading = false;
      state.gamesError = false;
    },
    setGamesLoading: (state) => {
      state.gamesLoading = true;
    },
    setGamesError: (state) => {
      state.gamesError = true;
      state.gamesLoading = false;
    },
    clearError: (state) => {
      state.gamesError = false
    }
  },
});

export const { setGames, setGamesLoading, setGamesError, clearError } = gameSlice.actions;
export default gameSlice.reducer;
