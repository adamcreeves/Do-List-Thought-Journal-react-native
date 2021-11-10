import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>You made it!</Text>
      <TouchableOpacity onPress={() => null}>
        {/*navigation.navigate()*/}
        <Text>Create a New List</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
