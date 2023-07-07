import { Text } from "react-native";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";

const MessageBoard = () => {
  return (
    <View>
      <Header title={"הודעות"} />
      <Message />
    </View>
  );
};

export default MessageBoard;
