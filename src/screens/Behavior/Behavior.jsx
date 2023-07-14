import { View } from "react-native";
import { getBehavior as gb } from "../../api/behavior";
import Header from "../../components/Header/Header";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import BehaviorContainer from "../../components/BehaviorContainer/BehaviorContainer";

const Behavior = ({ navigation }) => {
  const [behaviorList, setBehaviorList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBehavior = async () => {
      try {
        const behaviorList = await gb();
        setBehaviorList(behaviorList);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getBehavior();
  }, []);

  return (
    <View>
      <Header
        title={"ציונים"}
        rightIcon={<ArrowWithLogo navigation={navigation} />}
      />
      <LoadingCircle loading={loading} />
      {behaviorList.map((behavior, index) => (
        <BehaviorContainer key={index} {...behavior} dark={index % 2 === 0} />
      ))}
    </View>
  );
};

export default Behavior;
