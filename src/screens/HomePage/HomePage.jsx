import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FlatGrid } from "react-native-super-grid";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { TouchableOpacity } from "react-native";

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
      navigate: () => {
        navigation.navigate("MessageBoard");
      },
    },
    {
      title: 'ש"ב',
      icon: <MaterialCommunityIcons name="book-outline" size={50} />,
      navigate: () => {
        navigation.navigate("Homework");
      },
    },
    {
      title: "תאריכים מיוחדים",
      icon: <MaterialCommunityIcons name="calendar-star" size={50} />,
      navigate: () => {
        navigation.navigate("SpecialDates");
      },
    },
    {
      title: "מבחנים",
      icon: <MaterialCommunityIcons name="school" size={50} />,
      navigate: () => {
        navigation.navigate("TestSchedule");
      },
    },
    {
      title: "נוכחות",
      icon: <MaterialCommunityIcons name="qrcode" size={50} />,
      navigate: () => {
        navigation.navigate("ReportingPresence");
      },
    },
    {
      title: "התנהגות",
      icon: <MaterialCommunityIcons name="emoticon-angry" size={50} />,
      navigate: () => {
        navigation.navigate("Behavior");
      },
    },
    {
      title: "פרטים אישיים",
      icon: <MaterialCommunityIcons name="card-account-details" size={50} />,
    },
    {
      title: "ציונים",
      icon: <MaterialCommunityIcons name="star" size={50} />,
      navigate: () => {
        navigation.navigate("Grades");
      },
    },
  ];

  const handleLogout = () => {
    logout();
    navigation.navigate("LoginScreen");
  };

  const { user, logout } = useContext(UserContext);

  return (
    <View style={styles.pageContainer}>
      <Header
        leftIcon={
          <MaterialCommunityIcons
            onPress={handleLogout}
            name="logout"
            size={30}
          />
        }
        rightIcon={{ icon: "menu" }}
        title={user ? `בוקר טוב ${user.firstName}` : ""}
        navigation={navigation}
      />
      <FlatGrid
        itemDimension={110}
        data={optionsList}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 60 }}>
              <TouchableOpacity
                onPress={item.navigate}
                style={styles.grayContainer}
              >
                {item.icon}
                <Text style={styles.grayContainerText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  grayContainer: {
    backgroundColor: "#ffc1bd",
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
