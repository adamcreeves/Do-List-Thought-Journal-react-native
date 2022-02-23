import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { str015 } from "../../../resources/strings";
import { styles } from "../../../styles";

export default ListBody = ({ listWidth, item, setListItems, listItems }) => {
  const listBodyWidth = { width: listWidth };
  const listBodyTextWidth = {
    width: listWidth - 26,
  };
  const addToFilteredList = () =>
    setListItems(listItems.filter((x) => x !== item));
  return (
    <View style={[styles.listBodyView, listBodyWidth]}>
      <Text style={[styles.listBodyText, listBodyTextWidth]}>
        {str015 + item}
      </Text>
      <TouchableOpacity
        onPress={addToFilteredList}
        style={styles.listBodyButton}
      >
        <Image source={require("../../../../assets/deleteicon.png")} />
      </TouchableOpacity>
    </View>
  );
};
