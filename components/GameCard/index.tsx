import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "./styles";
import { Game } from "../../types";
import { useCallback, useMemo, useState } from "react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const [imageNotFoundError, setImageNotFoundError] = useState(false);

  const gameImageSrc = useMemo(() => {
    if (game.steamUrl) {
      // game app id is the last part of the `steamUrl`
      const gameAppId = game.steamUrl.split("/").pop();
      if (gameAppId)
        return `https://steamcdn-a.akamaihd.net/steam/apps/${gameAppId}/library_600x900_2x.jpg`;
    }
    return null;
  }, [game.steamUrl]);

  const onPress = useCallback(() => {
    ToastAndroid.show(
      game.title ?? "Game tittle not available",
      ToastAndroid.SHORT
    );
  }, [game.title]);

  // todo: we might want to add a default image
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.6} onPress={onPress}>
      {gameImageSrc && !imageNotFoundError ? (
        <ImageBackground
          source={{ uri: gameImageSrc }}
          style={styles.image}
          onError={() => setImageNotFoundError(true)}
        />
      ) : (
        <View style={styles.imageNotAvailableContainer}>
          <Text style={styles.imageNotAvailableText}>Image not available</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default GameCard;
