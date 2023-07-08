import { View } from "react-native";
import Header from "../../components/Header/Header";
import GradeContainer from "../../components/GradeContainer/GradeContainer";
import { useEffect, useState } from "react";
import { getGrades } from "../../api/grades";
import { ScrollView } from "react-native";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";

const Grades = ({ navigation }) => {
  const [grades, setGrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGrades()
      .then((grades) => {
        setGrades(grades.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"ציונים"}
        rightIcon={<ArrowWithLogo navigation={navigation} />}
      />
      <LoadingCircle loading={loading} />
      <ScrollView>
        {grades.map((grade, index) => (
          <GradeContainer
            key={index}
            {...grade}
            backgroundColor={index % 2 ? "#E8F9F9" : "#B9E9EB"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Grades;
