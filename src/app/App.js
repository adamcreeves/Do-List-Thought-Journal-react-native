import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CreateList from "../screens/CreateList";
import CreateThought from "../screens/CreateThought";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to now-it" component={Home} />
        <Stack.Screen name="Create a new now-it list" component={CreateList} />
        <Stack.Screen
          name="Create a new now-it thought"
          component={CreateThought}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
