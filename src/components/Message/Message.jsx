import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Message = ({ title, date, bodyContent }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 9 }}>
        <View style={styles.rowFlexContainer}>
          <MaterialCommunityIcons name="email" size={20} style={styles.icon} />
          <Text style={styles.title}>תזכורת בחינה</Text>
        </View>
        <View style={styles.rowFlexContainer}>
          <Text style={styles.details}>01/07/2023 | 20:05 | האוניברסיטה</Text>
        </View>
        <Text numberOfLines={1} style={styles.body}>
          סולמי מעיין שלום, בשעה 14:45 תתחיל בלהבלה בלהבלהבלהבלהבלה
        </Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        style={styles.leftArrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    padding: 5,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    color: "#287B9A",
    fontSize: 20,
    fontWeight: "bold",
  },
  rowFlexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    verticalAlign: "bottom",
    marginRight: 3,
  },
  details: {
    color: "#8ACDE6",
    marginTop: 1,
    marginBottom: 1,
  },
  body: {},
  leftArrow: {
    flex: 1,
    verticalAlign: "middle",
  },
});

export default Message;
