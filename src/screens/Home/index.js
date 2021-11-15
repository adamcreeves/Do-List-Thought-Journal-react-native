import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import ButtonA from "../../components/ButtonA";

export default Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHomeContainer}>
        <ButtonA route={"Create a new list"} label={"Create a New List"} />
        <ButtonA
          route={"Create a new thought"}
          label={"Create a New Thought"}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
