import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CreateList from "../screens/CreateList";
import CreateThought from "../screens/CreateThought";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to Do-Thot" component={Home} />
        <Stack.Screen name="Create a new list" component={CreateList} />
        <Stack.Screen name="Create a new thought" component={CreateThought} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
