import React from "react";
import { TextInput } from "react-native";

export default AddEntry = ({
  inputStyle,
  placeholderText,
  setText,
  value,
  onSubmitEditing,
}) => {
  const handleTextInput = (text) => setText(text);
  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholderText}
      placeholderTextColor="#aaaaaa"
      onChangeText={handleTextInput}
      value={value}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      onSubmitEditing={onSubmitEditing}
    />
  );
};
