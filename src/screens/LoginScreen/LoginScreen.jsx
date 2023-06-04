import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import LearnTogetherTitle from "../../components/LearnTogetherTitle/LearnTogetherTitle";
import { ButtonGroup } from "@rneui/themed";

const LoginScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [id, setId] = useState("");


  return (
    <View style={styles.pageContainer}>
      <LearnTogetherTitle />
      <ButtonGroup
        buttons={["מורים", "הורים", "תלמידים"]}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginTop: 20 }}
      />
      <Text style={styles.recognizeTitle}>מערכת הזדהות</Text>
      <TextInput
        style={styles.idInput}
        placeholder="תעודת זהות"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.idInput}
        placeholder="תעודת זהות"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <Button title="Log In"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  recognizeTitle: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    marginTop: 20,
  },
  idInput: {
    fontSize: 20,
    textAlign: "right",
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "blue",
    paddingRight: 5,
    height: 50,
  }
});

export default LoginScreen;
