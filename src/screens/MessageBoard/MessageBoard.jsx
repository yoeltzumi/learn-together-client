import { Text } from "react-native";
import { View } from "react-native";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";
import { useState } from "react";
import { getMessages } from "../../api/messages";
import ArrowWithLogo from "../../components/ArrowWithLogo/ArrowWithLogo";
import { useEffect } from "react";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { ScrollView } from "react-native";

const MessageBoard = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMessages()
      .then((grades) => {
        setMessages(grades.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={"הודעות"}
        rightIcon={<ArrowWithLogo navigation={navigation} />}
      />
      <LoadingCircle loading={loading} />
      <ScrollView>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MessageBoard;
