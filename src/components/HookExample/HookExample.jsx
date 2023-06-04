import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HookExample = () => {
  const [x, setX] = useState(0);
  useEffect(() => {
    console.log("chipopo");
  }, [x]);

  return (
    <View>
      <Text style={styles.text}>{x}</Text>
      <Button
        title="Click Me!"
        onPress={() => {
          setX((old) => {
            return old + 1;
          });
          console.log(x);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 200,
    textAlign: "center",
    marginTop: 200,
  },
});

export default HookExample;
