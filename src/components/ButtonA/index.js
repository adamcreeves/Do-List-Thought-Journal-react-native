import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default CreateList = ({ route, label }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => nav.navigate(route)}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
