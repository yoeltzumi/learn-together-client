import { ScrollView, View } from "react-native";
import TestBox from "../../components/TestBox/TestBox";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { getMyTests } from "../../api/tests";
import { ActivityIndicator } from "react-native-paper";

const TestSchedule = ({ navigation }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyTests()
      .then((res) => {
        setTests(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
      {loading && (
        <ActivityIndicator style={styles.loadingCircle} size="large" />
      )}
      <ScrollView>
        {tests.map((test, index) => (
          <TestBox
            key={index}
            subject={test.subject}
            startDate={test.startDate}
            endDate={test.endDate}
            moed={test.moed}
            dark={index % 2}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: { flex: 1 },
  loadingCircle: {
    marginTop: 10,
  },
});

export default TestSchedule;
