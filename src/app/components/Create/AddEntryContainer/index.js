import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AddEntry from "../AddEntry";

export default AddEntryContainer = ({
  containerStyle,
  listEntryStyle,
  placeholderText,
  setListFunc,
  listEntryValue,
  onSubmitEditing,
  buttonStyle,
  buttonFunc,
  buttonTextStyle,
  buttonText,
}) => {
  return (
    <View style={containerStyle}>
      <AddEntry
        inputStyle={listEntryStyle}
        placeholderText={placeholderText}
        setText={setListFunc}
        value={listEntryValue}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity style={buttonStyle} onPress={buttonFunc}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
