import { View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../../components/Header/Header";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { useEffect } from "react";
import { getCurrentLesson } from "../../api/attendance";
import { useState } from "react";
import InformationText from "../../components/InformationText/InformationText";
import { ActivityIndicator } from "react-native";
import { getCurrentDay, getToday } from "../../utils/date";

const ReportingPresence = ({ navigation }) => {
  const [currentLesson, setCurrentLesson] = useState();
  useEffect(() => {
    getCurrentLesson()
      .then((res) => {
        setCurrentLesson(res);
      })
      .catch((err) => {});
  }, []);

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
      {currentLesson === [] ? (
        <InformationText>
          <Text style={styles.infoText}>לא נמצא שיעור פתוח לדיווח נוכחות</Text>
          <Text style={styles.infoText}>
            יש להמתין שהמורה יפתח את השיעור לנוכחות
          </Text>
        </InformationText>
      ) : !currentLesson ? (
        <ActivityIndicator style={styles.loadingCircle} size="large" />
      ) : currentLesson.activatedForAttendence ? (
        <View style={styles.goodContainer}>
          <Text style={styles.text}>יש לסרוק את הקוד לסימון נוכחותך:</Text>
          <Text style={styles.text}>שיעור {currentLesson.subject}</Text>
          <Text style={styles.text}>
            יום {getCurrentDay()}', {getToday()}, {currentLesson.startTime} -{" "}
            {currentLesson.endTime}
          </Text>
          <View style={styles.scanButton}>
            <Text style={styles.scanButtonText}>לחץ כאן לסריקה</Text>
          </View>
        </View>
      ) : (
        <InformationText>
          <Text style={styles.infoText}>המורה עוד לא פתח את השיעור</Text>
        </InformationText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: { flex: 1, alignItems: "center", backgroundColor: "white" },
  infoText: {
    fontSize: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: "#45CFCD",
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  scanButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
  },
  goodContainer: {
    position: "absolute",
    top: "30%",
  },
});

export default ReportingPresence;
