import React, { useState } from "react";
import { View, Text } from "react-native";
import { str000, str018 } from "../../../resources/strings";
import { styles } from "../../../styles";
import { getQuote, logoutUser } from "../Utils";
import Logout from "../Logout";
import { useDispatch } from "react-redux";
import Loading from "../Loading";

export default HomeBody = () => {
  const [loading, setLoading] = useState(false);
  const quote = getQuote();
  const dispatch = useDispatch();
  const logout = () => {
    logoutUser(dispatch, setLoading);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Logout
        buttonStyle={styles.logoutButton}
        textStyle={styles.logoutButtonText}
        onPress={logout}
      />
      <Text style={styles.mainTitle}>{str000}</Text>
      <Text style={styles.mainSubtitle}>{str018}</Text>
      <Text style={styles.quoteText}>{quote}</Text>
    </View>
  );
};
