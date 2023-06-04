import { StyleSheet, Text } from "react-native";

const LearnTogetherTitle = () => {
  return <Text style={styles.title}>לומדים ביחד</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "blue",
    borderColor: "aqua",
    borderWidth: 3,
    width: "50%",
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 15,
    paddingTop: 15,
    alignSelf: "center",
    marginTop: 15,
  },
});

export default LearnTogetherTitle;
