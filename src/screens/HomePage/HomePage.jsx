import { Text, View, StyleSheet, Button } from "react-native";
import KeyTable from "../../components/KeyTable/KeyTable";
import Header from "../../components/Header/Header";

const HomePage = ({ navigation }) => {
  const optionsList = [
    {
      title: "מערכת שעות",
      icon: null,
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <Header />
      {optionsList.map((option, index) => {
        return <View key={index} style={styles.grayContainer}></View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  grayContainer: {
    backgroundColor: "gray",
    width: 100,
    height: 100,
  },
});

export default HomePage;
