import { View } from "react-native";
import Header from "../../components/Header/Header";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";
import { getSpecialDates as gsd } from "../../api/specialDates";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { useEffect, useState } from "react";
import SpecialDateContainer from "../../components/SpecialDateContainer/SpecialDateContainer";
import { ScrollView } from "react-native";

const SpecialDates = ({ navigation }) => {
  const [specialDates, setSpecialDates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpecialDates = async () => {
      const specialDates = await gsd();
      setSpecialDates(specialDates.data);
      setLoading(false);
    };
    getSpecialDates();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        rightIcon={<ArrowWithLogo navigation={navigation} />}
        title={"תאריכים מיוחדים"}
      />
      <LoadingCircle loading={loading} />
      <ScrollView>
        {specialDates.map((specialDate, index) => (
          <SpecialDateContainer
            key={index}
            name={specialDate.name}
            date={specialDate.date}
            time={specialDate.time}
            dark={index % 2 === 0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SpecialDates;
