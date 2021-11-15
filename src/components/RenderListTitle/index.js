import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default RenderListTitle = ({ listName, setListName }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
      }}
    >
      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        {listName}
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => setListName("")}
      >
        <Image
          style={{ height: 18, width: 18 }}
          source={require("../../../assets/pencil.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
