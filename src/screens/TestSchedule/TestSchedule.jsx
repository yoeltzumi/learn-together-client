import { ScrollView, View } from "react-native";
import TestBox from "../../components/TestBox/TestBox";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { getMyTests } from "../../api/tests";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";

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
        rightIcon={<ArrowWithLogo navigation={navigation} />}
        title={"בחינות"}
      />

      <LoadingCircle loading={loading} />

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
});

export default TestSchedule;
