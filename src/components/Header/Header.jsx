import * as React from "react";
import { Header } from "@rneui/base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserContext from "../../contexts/UserContext";

export default ({ leftIcon, rightIcon, title }) => {
  return (
    <Header
      barStyle="default"
      centerComponent={{
        text: title,
        style: { fontWeight: "bold", fontSize: 20 },
      }}
      containerStyle={{
        width: "100%",
        backgroundColor: "white",
        height: 90,
        paddingLeft: 20,
        borderBottomColor: "#F7F7F8",
        borderBottomWidth: 2,
      }}
      leftComponent={leftIcon}
      placement="center"
      rightComponent={rightIcon}
    />
  );
};
