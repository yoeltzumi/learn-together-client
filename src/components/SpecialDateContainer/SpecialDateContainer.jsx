import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const SpecialDateContainer = ({ name, date, time, dark }) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: dark ? "#B9E9EB" : "#E8F9F9",
      }}
    >
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.text}>תאריך: {date}</Text>
      <Text style={styles.text}>שעה: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingRight: "15%",
    borderRadius: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
  },
});

export default SpecialDateContainer;
