import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../../../../styles";
import { useNavigation } from "@react-navigation/native";

export default ActionButton = ({ route, label }) => {
  const nav = useNavigation();
  const handlePress = () => nav.navigate(route);
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
