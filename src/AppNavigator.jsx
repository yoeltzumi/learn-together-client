import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import HomePage from "./screens/HomePage/HomePage";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import logo from "../assets/smart-school-logo.jpg";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "",
          headerTransparent: true,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          options={{
            headerRight: () => (
              <Image
                style={{
                  position: "absolute",
                  top: 0,
                  right: 10,
                  width: 100,
                  height: 100,
                }}
                source={logo}
              />
            ),
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
