import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ListEntry from "../ListEntry";

export default ListEntryContainer = ({
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
      <ListEntry
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
