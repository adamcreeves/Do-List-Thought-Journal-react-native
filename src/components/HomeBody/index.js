import React from "react";
import { View, Text } from "react-native";
import { str000, str018 } from "../../resources/strings";
import { styles } from "../../styles";
import { getQuote } from "../Utils";
import Logout from "../Logout";
import { useDispatch } from "react-redux";

export default HomeBody = () => {
  const quote = getQuote();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Logout
        buttonStyle={{
          alignItems: "center",
          position: "absolute",
          top: 50,
          right: 25,
        }}
        textStyle={{ color: "#87CEEB", fontWeight: "bold" }}
        dispatch={dispatch}
      />
      <Text style={styles.mainTitle}>{str000}</Text>
      <Text style={styles.mainSubtitle}>{str018}</Text>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};
