import { Text } from "react-native";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import HomeworkContainer from "../../components/HomeworkContainer/HomeworkContainer";
import { getHomework } from "../../api/homework";
import { ScrollView } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

const Homewoerk = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHomework()
      .then((grades) => {
        setTasks(grades.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"שיעורי בית"}
        rightIcon={<ArrowWithLogo navigation={navigation} />}
      />
      <LoadingCircle loading={loading} />
      <ScrollView>
        {tasks.map((item, index) => (
          <HomeworkContainer
            key={index}
            subject={item.subject}
            date={item.date}
            pages={item.pages}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Homewoerk;
