import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Main from "./src/screens/Main";
import { str004, str019 } from "./src/resources/strings";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={str019} component={Main} />
        <Stack.Screen name={str004} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
