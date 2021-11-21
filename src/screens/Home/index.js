import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import ActionButton from "../../components/Create/ActionButton";

export default Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHomeContainer}>
        <ActionButton route={"Create a new list"} label={"Create a New List"} />
        <ActionButton
          route={"Create a new thought"}
          label={"Create a New Thought"}
        />
      </View>
      <ActionButton route={"Login"} label={"To Login"} />
      <StatusBar style="auto" />
    </View>
  );
};
