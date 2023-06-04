import { StyleSheet, Text, View } from "react-native";

const Message = ({ title, date, bodyContent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.body}>{bodyContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aqua",
    width: "80%",
    alignSelf: "center",
    minHeight: 100,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  date: {
    textAlign: "right",
    color: "gray",
  },
  body: {
    fontSize: 17,
  },
});

export default Message;
