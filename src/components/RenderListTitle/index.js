import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles";

export default RenderListTitle = ({ listName, setListName }) => {
  const handlePress = () => setListName("");
  return (
    <View style={styles.listTitleContainer}>
      <Text style={styles.listTitleText}>{listName}</Text>
      <TouchableOpacity style={styles.editTitleButton} onPress={handlePress}>
        <Image
          style={styles.editTitleIcon}
          source={require("../../../assets/pencil.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
