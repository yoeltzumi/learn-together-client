import { Text } from "react-native";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import HomeworkContainer from "../../components/HomeworkContainer/HomeworkContainer";

const Homewoerk = () => {
  const array = [
    {
      subject: "מתמטיקה",
      date: "12/12/2021",
      pages: "1-10",
    },
    {
      subject: "אנגלית",
      date: "12/12/2021",
      pages: "1-10",
    },
  ];

  return (
    <View>
      <Header title={"שיעורי בית"} />
      {array.map((item, index) => (
        <HomeworkContainer
          key={index}
          subject={item.subject}
          date={item.date}
          pages={item.pages}
        />
      ))}
    </View>
  );
};

export default Homewoerk;
