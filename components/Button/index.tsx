import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  styles?: {
    button?: ViewStyle;
    text?: TextStyle;
  };
}

const Button = ({ title, styles: customStyles, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...customStyles?.button }}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={{ ...styles.title, ...customStyles?.text }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
