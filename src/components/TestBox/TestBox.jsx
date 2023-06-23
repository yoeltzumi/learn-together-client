import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const TestBox = (props) => {
  const { dark, endDate, moed, startDate, subject } = props;
  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);
  const date = `${startDateObject.getDate()}/${startDateObject.getMonth()}/${startDateObject.getFullYear()}`;
  const hour = `${startDateObject.getHours()}:${startDateObject.getMinutes()} - ${endDateObject.getHours()}:${endDateObject.getMinutes()}`;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: dark ? "#B9E9EB" : "#E8F8F8",
      }}
    >
      <Text style={{ ...styles.text, fontWeight: "bold" }}>
        מקצוע: {subject}
      </Text>

      <Text style={styles.text}>תאריך: {date}</Text>
      <Text style={styles.text}>שעה: {hour}</Text>
      <Text style={styles.text}>מועד: {moed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 50,
    paddingTop: 25,
    paddingBottom: 25,
  },
  text: {
    fontSize: 17,
  },
});

export default TestBox;
