import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { getAllGames } from "../../api";
import { Game } from "../../types";
import GameCard from "../../components/GameCard";
import styles from "./styles";

const Catalog = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = () => {
    getAllGames()
      .then((response) => {
        setGames(response);
        console.log(response)
      })
      .catch((error) => {
        // todo: handle error
      });
  };
  return (
    <View>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Catalog;
