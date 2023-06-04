import { StyleSheet, View } from "react-native";
import { Text, Input, Icon, Button } from "@rneui/themed";

const ForgotPassword = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text h1={true} h1Style={styles.title}>
          שחכת סיסמא?
        </Text>
        <Text h1={true} h1Style={styles.title}>
          תוכל לאפס אותה בקלות
        </Text>
      </View>
      <Input
        rightIcon={<Icon name="mail" />}
        placeholder="  כתובת מייל"
        containerStyle={styles.input}
      />
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        color="#4ACCCC"
        title="שלח"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: "normal", fontSize: 38 },
  textContainer: {
    marginRight: 20,
    marginTop: "50%",
  },
  input: {
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ABF2F9",
  },
  button: {
    width: 150,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    height: 60
  },
});

export default ForgotPassword;
