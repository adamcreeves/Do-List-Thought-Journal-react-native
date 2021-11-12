import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import ButtonA from "../../components/ButtonA";

export default Home = () => {
  return (
    <View style={styling.container}>
      <View style={styles.topSubContainer}>
        <ButtonA
          route={"Create a new now-it list"}
          label={"Create a New List"}
        />
        <ButtonA
          route={"Create a new now-it thought"}
          label={"Create a New Thought"}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
