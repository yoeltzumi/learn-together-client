import { Text, View } from "react-native";
import Header from "../../components/Header/Header";
import GradeContainer from "../../components/GradeContainer/GradeContainer";

const Grades = () => {
  const grades = [
    {
      subject: "מתמטיקה",
      type: "מבחן",
      grade: 100,
      date: "01/01/2021",
    },
    {
      subject: "מתמטיקה",
      type: "מבחן",
      grade: 100,
      date: "01/01/2021",
    },
    {
      subject: "מתמטיקה",
      type: "מבחן",
      grade: 100,
      date: "01/01/2021",
    },
  ];
  return (
    <View>
      <Header title={"ציונים"} />
      {grades.map((grade, index) => (
        <GradeContainer
          key={index}
          {...grade}
          backgroundColor={index % 2 ? "#E8F9F9" : "#B9E9EB"}
        />
      ))}
    </View>
  );
};

export default Grades;
