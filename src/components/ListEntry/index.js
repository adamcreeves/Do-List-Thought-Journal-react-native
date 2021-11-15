import React from "react";
import { TextInput } from "react-native";

export default ListEntry = ({
  inputStyle,
  placeholderText,
  setText,
  value,
  onSubmitEditing,
}) => {
  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholderText}
      placeholderTextColor="#aaaaaa"
      onChangeText={(text) => setText(text)}
      value={value}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      onSubmitEditing={onSubmitEditing}
    />
  );
};
