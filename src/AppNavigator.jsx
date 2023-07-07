import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import HomePage from "./screens/HomePage/HomePage";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import logo from "../assets/smart-school-logo.jpg";
import { UserProvider } from "./contexts/UserContext";
import TestSchedule from "./screens/TestSchedule/TestSchedule";
import ReportingPresence from "./screens/ReportingPresence/ReportingPresence";
import Homewoerk from "./screens/Homework/Homework";
import Grades from "./screens/Grades/Grades";
import MessageBoard from "./screens/MessageBoard/MessageBoard";

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
          <Stack.Screen name="Homework" component={Homewoerk} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Grades"
            component={Grades}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MessageBoard"
            component={MessageBoard}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TestSchedule"
            component={TestSchedule}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ReportingPresence"
            component={ReportingPresence}
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
