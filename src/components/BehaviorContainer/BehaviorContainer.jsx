import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const BehaviorContainer = ({ date, lessonNumber, subject, type, dark }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: dark ? "#B9E9EB" : "#E8F9F9",
      }}
    >
      <View>
        <Text style={styles.typeText}>{type}</Text>
        <Text style={styles.text}>{subject}</Text>
      </View>
      <View>
        <Text style={styles.text}>שיעור {lessonNumber}</Text>
        <Text style={styles.text}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: 40,
  },
  typeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
});

export default BehaviorContainer;
