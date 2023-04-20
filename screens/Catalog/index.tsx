import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useEffect } from "react";
import { getAllGames } from "../../api";
import GameCard from "../../components/GameCard";
import styles from "./styles";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  setGames,
  setGamesError,
  setGamesLoading,
} from "../../redux/gameSlice";
import { RootState } from "../../redux/store";

const Catalog = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.games);
  const { error, loading } = useSelector((state: RootState) => ({
    error: state.game.gamesError,
    loading: state.game.gamesLoading,
  }));

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    dispatch(setGamesLoading());
    getAllGames()
      .then((response) => {
        // note: this timeout was added to delay the request so the loader is visible
        setTimeout(() => dispatch(setGames(response)), 1500);
        // uncomment this to simulate and error
        // setTimeout(() => dispatch(setGamesError()), 1500);
      })
      .catch(() => dispatch(setGamesError()));
  };

  const retry = () => {
    dispatch(clearError())
    fetchGame()
  }

  return (
    <View style={styles.catalog}>
      {loading && !error && <ActivityIndicator size={"large"} />}
      {error && !loading && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            An error occurred while loading the games
          </Text>
          <Button
            title={"Retry"}
            styles={{ button: styles.button }}
            onPress={retry}
          />
        </View>
      )}
      {!loading && !error && (
        <FlatList
          contentContainerStyle={styles.list}
          data={games}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const customStyles = index === 0 ? { card: { marginTop: 48 } } : {};
            return <GameCard game={item} styles={customStyles} />;
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

export default Catalog;
