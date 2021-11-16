import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";

export default SubmitButton = ({ submit, label }) => {
  const combinedStyles = [styles.button, styles.submitBtnExtra];
  return (
    <TouchableOpacity style={combinedStyles} onPress={submit}>
      <Text style={styles.listEntryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};
