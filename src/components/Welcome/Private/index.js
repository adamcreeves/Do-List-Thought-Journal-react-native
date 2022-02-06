import React from "react";
import { View } from "react-native";
import { str002, str003 } from "../../../resources/strings";
import { styles } from "../../../styles";
import ActionButton from "../../Create/ActionButton";

export default Private = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHomeContainer}>
        <ActionButton route={str002} label={str002} />
        <ActionButton route={str003} label={str003} />
      </View>
    </View>
  );
};
