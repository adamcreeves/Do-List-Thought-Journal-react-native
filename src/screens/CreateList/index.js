import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styling } from "../../styles/styling";

export default CreateList = () => {
  return (
    <View style={styling.container}>
      <Text>Create a new Not-it List here!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
