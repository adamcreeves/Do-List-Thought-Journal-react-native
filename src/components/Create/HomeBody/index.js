import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { str000, str004, str005, str018 } from "../../../resources/strings";
import { styles } from "../../../styles";
import ActionButton from "../ActionButton";
import { getQuote } from "../../Utils";

export default HomeBody = () => {
  const quote = getQuote();
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{str000}</Text>
      <Text style={styles.mainSubtitle}>{str018}</Text>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};
