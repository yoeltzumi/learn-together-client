import { Text, View, StyleSheet, Button } from "react-native";
import KeyTable from "../../components/KeyTable/KeyTable";

const HomePage = ({ navigation }) => {
  const tableContent = [
    "הודעות",
    "מערכת שעות",
    'ש"ב',
    "ציונים",
    "מבחנים",
    "דיווח נוכחות",
    "תאריכים מיוחדים",
    "פרטים אישיים",
    "התנהגות בשיעור",
  ];

  const createTable = () => {
    let grid = [];
    for (let index = 0; index < tableContent.length; index = index + 3) {
      const row = (
        <View style={styles.rowContainer}>
          {tableContent.slice(index, index + 3).map((titleName) => {
            return <KeyTable title={titleName} key={titleName} />;
          })}
        </View>
      );
      grid = [...grid, row];
    }
    return grid;
  };

  return (
    <View>
      <Button
        title="שכחת סיסמה?"
        onPress={() => navigation.navigate("ForgotPassword")}
      />
      <View style={styles.container}>
        <Text style={styles.goodMorningTitle}>בוקר טוב</Text>
        {/* {createTable()} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goodMorningTitle: {
    color: "orange",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  container: {
    marginRight: 20,
  },
  rowContainer: {
    flexDirection: "row-reverse",
    marginTop: 20,
  },
});

export default HomePage;
