import React from "react";
import { View, Text } from "react-native";
import { str001, str004, str018 } from "../../../resources/strings";
import { styles } from "../../../styles";
import ActionButton from "../../Create/ActionButton";

export default Public = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>{str001}</Text>
      <ActionButton route={str004} label={str004} />
      <Text style={styles.welcomeSubtitle}>{str018}</Text>
    </View>
  );
};
