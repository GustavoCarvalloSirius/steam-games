import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  catalog: {
    flex: 1,
    width: "100%",
    justifyContent: "center"
  },
  separator: {
    width: "100%",
    height: 16,
  },
  errorContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  button: {
    marginTop: 12,
  },
  list: {
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
