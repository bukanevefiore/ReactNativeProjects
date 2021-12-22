import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ffa500",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  containerCompleted: {
    backgroundColor: "#808080",
  },
  titleCompleted: {
    color: "#fff",
    textDecorationLine: "line-through",
  },
});

export default styles;
