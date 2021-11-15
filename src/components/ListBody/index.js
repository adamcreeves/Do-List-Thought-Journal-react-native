import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export const ListBody = (item, setListItems, listItems) => {
  return (
    <View
      style={{
        width: 220,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "black",
          flexDirection: "row",
          width: 190,
          marginVertical: 3,
          fontSize: 18,
        }}
      >
        {"\u25CF  " + item}
      </Text>
      <TouchableOpacity
        onPress={() => setListItems(listItems.filter((x) => x !== item))}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 6,
        }}
      >
        <Image source={require("../../../assets/deleteicon.png")} />
      </TouchableOpacity>
    </View>
  );
};
