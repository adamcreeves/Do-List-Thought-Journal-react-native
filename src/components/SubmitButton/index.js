import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";

export default SubmitButton = ({ submit, label }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.submitBtnExtra]}
      onPress={submit}
    >
      <Text style={styles.listEntryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};
