import { StyleSheet, Text, View } from "react-native";
import Message from "../../components/Message/Message";

const MessageBoard = () => {
  // messages = we gonna take for db

  const messagesArray = [
    {
      title: "כותרת 1",
      date: "07/05/2023",
      bodyContent:
        "ם יתברר כי חורים שחורים אינם קיימים, ובכך תרד לטמיון כל עבודתו המדעית, אז לפחות יישאר בידיו פרס ניחומים. כל אחד מהיריבים רשם את הפרס שהוא דורש, ונערך חוזה התערבות ",
    },
    {
      title: "כותרת 2",
      date: "07/05/2023",
      bodyContent:
        "ם יתברר כי חורים שחורים אינם קיימים, ובכך תרד לטמיון כל עבודתו המדעית, אז לפחות יישאר בידיו פרס ניחומים. כל אחד מהיריבים רשם את הפרס שהוא דורש, ונערך חוזה התערבות ",
    },
  ];

  return (
    <View>
      <Text style={styles.title}>הודעות</Text>
      {messagesArray.map((message) => (
        <Message
          bodyContent={message.bodyContent}
          date={message.date}
          title={message.title}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    color: "blue",
  },
});

export default MessageBoard;
