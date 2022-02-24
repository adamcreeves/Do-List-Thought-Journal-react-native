import React from "react";
import { View } from "react-native";
import { str020, str021 } from "../../../../resources/strings";
import { styles } from "../../../../styles";
import ActionButton from "../subcomponents/ActionButton";

export default CreateBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ActionButton route={str020} label={str020} />
        <ActionButton route={str021} label={str021} />
      </View>
    </View>
  );
};
