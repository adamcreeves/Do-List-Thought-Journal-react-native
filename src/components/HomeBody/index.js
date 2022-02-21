import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { str000, str018 } from "../../resources/strings";
import { styles } from "../../styles";
import { getQuote, logoutUser } from "../Utils";
import Logout from "../Logout";
import { useDispatch } from "react-redux";

export default HomeBody = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const quote = getQuote();
  const dispatch = useDispatch();
  const logout = () => {
    logoutUser(dispatch, setLoading);
  };

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: "#87CEEB" }]}>
        <ActivityIndicator size={"large"} color={"#FFFFFF"} />
      </View>
    );
  }

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
        onPress={logout}
      />
      <Text style={styles.mainTitle}>{str000}</Text>
      <Text style={styles.mainSubtitle}>{str018}</Text>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};
