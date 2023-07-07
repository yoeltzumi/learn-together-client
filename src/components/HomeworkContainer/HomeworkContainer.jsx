import { StyleSheet, Text, View } from "react-native";

const HomeworkContainer = ({ subject, date, pages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.text}>עמודים {pages}</Text>
      <Text style={styles.text}>מתאריך {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8F9F9",
    paddingBottom: "10%",
  },
  subject: {
    backgroundColor: "#B9E9EB",
    fontWeight: "bold",
    fontSize: 25,
    paddingRight: "10%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 17,
    paddingRight: 10,
  },
});

export default HomeworkContainer;
