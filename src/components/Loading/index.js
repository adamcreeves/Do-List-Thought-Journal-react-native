import React from "react";
import { white } from "../../resources/colors";
import { str078 } from "../../resources/strings";
import { styles } from "../../styles";
import { View, ActivityIndicator } from "react-native";

export default Loading = () => {
  return (
    <View style={[styles.container, styles.loadingScreen]}>
      <ActivityIndicator size={str078} color={white} />
    </View>
  );
};
