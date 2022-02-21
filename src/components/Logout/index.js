import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default Logout = ({ buttonStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Ionicons name={"log-out"} size={30} color={"#87CEEB"} />
      <Text style={textStyle}>Logout</Text>
    </TouchableOpacity>
  );
};
