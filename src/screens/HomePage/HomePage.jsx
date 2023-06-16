import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatGrid } from "react-native-super-grid";

import Header from "../../components/Header/Header";

const HomePage = ({ navigation }) => {
  const optionsList = [
    {
      title: "מערכת שעות",
      icon: <MaterialCommunityIcons name="calendar-clock" size={50} />,
    },
    {
      title: "הודעות",
      icon: <MaterialCommunityIcons name="message" size={50} />,
    },
    {
      title: 'ש"ב',
      icon: <MaterialCommunityIcons name="book-outline" size={50} />,
    },
    {
      title: "תאריכים מיוחדים",
      icon: <MaterialCommunityIcons name="calendar-star" size={50} />,
    },
    {
      title: "מבחנים",
      icon: <MaterialCommunityIcons name="school" size={50} />,
    },
    {
      title: "נוכחות",
      icon: <MaterialCommunityIcons name="qrcode" size={50} />,
    },
    {
      title: "התנהגות",
      icon: <MaterialCommunityIcons name="emoticon-angry" size={50} />,
    },
    {
      title: "פרטים אישיים",
      icon: <MaterialCommunityIcons name="card-account-details" size={50} />,
    },
    {
      title: "ציונים",
      icon: <MaterialCommunityIcons name="star" size={50} />,
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <Header navigation={navigation} />
      <FlatGrid
        itemDimension={110}
        data={optionsList}
        renderItem={({ item }) => {
          return (
            <View style={{marginTop: 60}}>
              <View style={styles.grayContainer}>
                {item.icon}
                <Text style={styles.grayContainerText}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
      {/* {optionsList.map((option, index) => {
        return (
          <View key={index} style={styles.grayContainer}>
            {option.icon}
            <Text style={styles.grayContainerText}>{option.title}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  grayContainer: {
    backgroundColor: "#ECECEC",
    borderRadius: 30,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    display: "flex",
  },
  grayContainerText: {
    color: "#6D6E6C",
    fontSize: 18,
    textAlign: "center",
  },
});

export default HomePage;
