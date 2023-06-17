import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import HomePage from "./screens/HomePage/HomePage";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import logo from "../assets/smart-school-logo.jpg";
import { UserProvider } from "./contexts/UserContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "",
            headerTransparent: true,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomePage}
          />
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
    </UserProvider>
  );
};

export default AppNavigator;
