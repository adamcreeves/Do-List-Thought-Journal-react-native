import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { skyblue } from "../../../resources/colors";
import { str083, str084 } from "../../../resources/strings";
import { thirty } from "../../../resources/values";

export default Logout = ({ buttonStyle, textStyle, onPress }) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Ionicons name={str084} size={thirty} color={skyblue} />
      <Text style={textStyle}>{str083}</Text>
    </TouchableOpacity>
  );
};
