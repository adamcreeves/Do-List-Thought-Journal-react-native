import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles";

export default CreateThought = () => {
  return (
    <View style={styles.container}>
      <Text>Lets get started!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
