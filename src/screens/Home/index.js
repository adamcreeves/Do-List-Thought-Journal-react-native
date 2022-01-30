import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import ActionButton from "../../components/Create/ActionButton";
import { str002, str003, str004, str005 } from "../../resources/strings";

export default Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHomeContainer}>
        <ActionButton route={str002} label={str002} />
        <ActionButton route={str003} label={str003} />
      </View>
      <ActionButton route={str004} label={str004} />
      <StatusBar style={str005} />
    </View>
  );
};
