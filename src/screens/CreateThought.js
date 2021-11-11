import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styling } from "../styles/styling";

export default CreateThought = () => {
  return (
    <View style={styling.container}>
      <Text>Create a new Not-it Thought here!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
