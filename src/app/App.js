import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CreateList from "../screens/CreateList";
import CreateThought from "../screens/CreateThought";
import Login from "../screens/Login";
import { str001, str002, str003, str004 } from "../resources/strings";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={str001} component={Home} />
        <Stack.Screen name={str002} component={CreateList} />
        <Stack.Screen name={str003} component={CreateThought} />
        <Stack.Screen name={str004} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
