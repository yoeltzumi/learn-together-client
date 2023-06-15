import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import ImageCropPicker from "react-native-image-crop-picker";

import logo from "../../../assets/smart-school-logo.jpg";
import { TouchableHighlight } from "react-native";
import { Icon, Input } from "@rneui/base";
import { Pressable } from "react-native";

const LoginScreen = () => {
  const [pickedRolesIndex, setPickedRolesIndex] = useState(null);

  const handleRoleChange = (index) => {
    setPickedRolesIndex(index);
  };

  const usersRoles = ["הורים", "מורים", "תלמידים"];

  return (
    <View style={styles.pageContainer}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.rolesContainer}>
        {usersRoles.map((role, index) => (
          <TouchableOpacity
            onPress={() => handleRoleChange(index)}
            key={index}
            style={{
              ...styles.roleContainer,
              backgroundColor: index === pickedRolesIndex ? "aqua" : "#47CCD0",
            }}
          >
            <Text style={styles.roleText}>{role}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.welcomeTitle}>ברוכים הבאים</Text>
      <Input
        rightIcon={<FontAwesome name="user" size={25} />}
        // leftIcon={
        //   <Icon color={canSend ? "green" : "gray"} name="check-circle" />
        // }
        placeholder="  תעודת זהות"
        // containerStyle={styles.input}
        // value={email}
        // onChangeText={(event) => setEmail(event)}
        // errorMessage={errorMessage}
      />
      <Input
        rightIcon={<FontAwesome name="lock" size={25} />}
        // leftIcon={
        //   <Icon color={canSend ? "green" : "gray"} name="check-circle" />
        // }
        placeholder="  סיסמא"
        // containerStyle={styles.input}
        // value={email}
        // onChangeText={(event) => setEmail(event)}
        // errorMessage={errorMessage}
      />
      <Text style={styles.forgotPassword}>שכחת סיסמא?</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>התחברות</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    resizeMode: "contain",
  },
  rolesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  roleContainer: {
    height: 50,
    width: 105,
    borderRadius: 15,
  },
  roleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    height: "100%",
  },
  welcomeTitle: {
    fontSize: 30,
    marginTop: 35,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontWeight: "bold",
    fontSize: 17,
  },
  loginButton: {
    width: "95%",
    backgroundColor: "#47CCD0",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
});

export default LoginScreen;
