import * as React from "react";
import { Header } from "@rneui/base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default ({ navigation }) => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigation.navigate("LoginScreen");
  };

  return (
    <Header
      barStyle="default"
      centerComponent={{
        text: user ? `בוקר טוב ${user.firstName}` : "",
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
      leftComponent={
        <MaterialCommunityIcons
          onPress={handleLogout}
          name="logout"
          size={30}
        />
      }
      placement="center"
      rightComponent={{ icon: "menu" }}
    />
  );
};
