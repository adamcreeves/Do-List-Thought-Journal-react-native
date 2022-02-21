import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { logoutUser } from "../Utils";

export default Logout = ({ buttonStyle, textStyle, dispatch }) => {
  const logout = () => logoutUser(dispatch);
  return (
    <TouchableOpacity style={buttonStyle} onPress={logout}>
      <Ionicons name={"log-out"} size={30} color={"#87CEEB"} />
      <Text style={textStyle}>Logout</Text>
    </TouchableOpacity>
  );
};
