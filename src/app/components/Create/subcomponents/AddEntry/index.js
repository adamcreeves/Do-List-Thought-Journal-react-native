import React from "react";
import { TextInput } from "react-native";
import { gray, transparent } from "../../../../../resources/colors";
import { str014 } from "../../../../../resources/strings";

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
      placeholderTextColor={gray}
      onChangeText={handleTextInput}
      value={value}
      underlineColorAndroid={transparent}
      autoCapitalize={str014}
      onSubmitEditing={onSubmitEditing}
    />
  );
};
