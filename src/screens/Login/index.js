import React from "react";
import { View, Text } from "react-native";
import LoginContainer from "../../components/Login/LoginContainer";
import { styles } from "../../styles";

export default Login = () => {
  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <LoginContainer containerStyle={{ backgroundColor: "white" }} />
    </View>
  );
};
