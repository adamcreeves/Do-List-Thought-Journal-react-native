import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Button } from "react-native";
import { styles } from "../../styles";
import Welcome from "../../components/Welcome";
import { str005 } from "../../resources/strings";

export default Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handlePress = () => setLoggedIn(!loggedIn);
  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Switch" style={{ margin: 25 }} />
      <Welcome loggedIn={loggedIn} />
      <StatusBar style={str005} />
    </View>
  );
};
