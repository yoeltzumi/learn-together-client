import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../../components/Header/Header";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const ReportingPresence = () => {
  return (
    <View style={styles.pageContainer}>
      <Header
        leftIcon={{ icon: "menu" }}
        rightIcon={
          <MaterialCommunityIcons
            onPress={() => navigation.goBack()}
            name="arrow-right"
            size={30}
          />
        }
        title={"בחינות"}
      />
      <View style={{ position: "absolute", top: "40%", alignItems: "center" }}>
        <MaterialCommunityIcons name="information-outline" size={100} />
        <Text style={styles.text}>לא נמצא שיעור פתוח לדיווח נוכחות</Text>
        <Text style={styles.text}>יש להמתין שהמורה יפתח את השיעור לנוכחות</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: { flex: 1, alignItems: "center" },
  text: {
    fontSize: 20,
  },
});

export default ReportingPresence;
