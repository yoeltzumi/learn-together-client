import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

export default () => {
  const { user } = useAuth();

  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: user ? `בוקר טוב ${user.firstName}` : "",
        style: { fontWeight: "bold", fontSize: 20 },
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: "100%", backgroundColor: "gray", height: 90 }}
      leftComponent={{ icon: "logout" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={{ icon: "menu" }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
};
