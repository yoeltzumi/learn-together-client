import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const GradeContainer = ({ subject, type, grade, date, backgroundColor }) => {
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={{ ...styles.text, ...styles.boldText }}>
        מקצוע: {subject}
      </Text>
      <Text style={styles.text}>{type}</Text>
      <Text style={{ ...styles.text, ...styles.boldText }}>ציון: {grade}</Text>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingLeft: "20%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default GradeContainer;
