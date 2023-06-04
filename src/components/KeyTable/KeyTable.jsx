import { StyleSheet, Text } from "react-native";

const KeyTable = ({ title }) => {
  return <Text style={styles.container}>{title}</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: "green",
    fontSize: 30,
    borderColor: "green",
    borderWidth: 3,
    width: 120,
    height: 90,
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: 10,
  },
});

export default KeyTable;
