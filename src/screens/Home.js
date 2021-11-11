import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styling } from "../styles/styling";

export default Home = () => {
  const nav = useNavigation();
  return (
    <View style={styling.container}>
      <View style={styling.topSubContainer}>
        <TouchableOpacity
          style={styling.button}
          onPress={() => nav.navigate("Create a new Now-it List")}
        >
          <Text>Create a New List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styling.button}
          onPress={() => nav.navigate("Create a new Now-it Thought")}
        >
          <Text>Create a New Thought</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
