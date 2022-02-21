import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { auth } from "../firebase/config";
import { customStackNavigator } from "../components/Utils";
import Main from "../screens/Main";
import Authentication from "../screens/Authentication";
import CreateList from "../screens/CreateList";
import CreateThought from "../screens/CreateThought";
import { str004, str019, str020, str021 } from "../resources/strings";

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

export default AppBody = () => {
  const stateUser = useSelector((state) => state.user);

  console.log("this is the stateUser: ", stateUser);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customStackNavigator}>
        {stateUser ? (
          <Stack.Screen name={str019} component={Main} />
        ) : (
          <Stack.Screen name={str004} component={Authentication} />
        )}
        <Stack.Screen name={str020} component={CreateList} />
        <Stack.Screen name={str021} component={CreateThought} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
