import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default ListBody = ({ listWidth, item, setListItems, listItems }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
        },
        { width: listWidth },
      ]}
    >
      <Text
        style={[
          {
            color: "black",
            flexDirection: "row",
            marginVertical: 3,
            fontSize: 18,
          },
          {
            width: listWidth - 26,
          },
        ]}
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
        <Image source={require("../../../../assets/deleteicon.png")} />
      </TouchableOpacity>
    </View>
  );
};
