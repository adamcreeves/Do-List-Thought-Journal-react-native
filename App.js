import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/Main";
import { str004, str019, str020, str021 } from "./src/resources/strings";
import CreateList from "./src/screens/CreateList";
import CreateThought from "./src/screens/CreateThought";
import { customStackNavigator } from "./src/components/Utils";
import Authentication from "./src/screens/Authentication";

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();
// to do: Add firebase authentication once Login and Register components are complete
const user = true;

export default App = () => {
  const landingScreen = user ? Main : Authentication;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customStackNavigator}>
        <Stack.Screen name={str019} component={landingScreen} />
        <Stack.Screen name={str004} component={Authentication} />
        <Stack.Screen name={str020} component={CreateList} />
        <Stack.Screen name={str021} component={CreateThought} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
