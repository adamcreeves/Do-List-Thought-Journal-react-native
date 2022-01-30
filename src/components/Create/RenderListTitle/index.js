import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { str006 } from "../../../resources/strings";
import { styles } from "../../../styles";

export default RenderListTitle = ({ listName, setListName }) => {
  const handlePress = () => setListName(str006);
  return (
    <View style={styles.listTitleContainer}>
      <Text style={styles.listTitleText}>{listName}</Text>
      <TouchableOpacity style={styles.editTitleButton} onPress={handlePress}>
        <Image
          style={styles.editTitleIcon}
          source={require("../../../../assets/pencil.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
