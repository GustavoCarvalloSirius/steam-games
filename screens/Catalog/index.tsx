import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getAllGames } from "../../api";
import { Game } from "../../types";
import GameCard from "../../components/GameCard";
import styles from "./styles";
import Button from "../../components/Button";

const Catalog = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    getAllGames()
      .then((response) => {
        setGames(response);
      })
      .catch(() => {
        setLoadError(true);
      });
  };

  return (
    <View>
      {!loadError ? (
        <FlatList
          data={games}
          renderItem={({ item }) => <GameCard game={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            An error occurred while loading the games
          </Text>
          <Button
            title={"Retry"}
            styles={{ button: styles.button }}
            onPress={fetchGame}
          />
        </View>
      )}
    </View>
  );
};

export default Catalog;
