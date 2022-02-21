import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customStackNavigator}>
        {stateUser ? (
          <Stack.Screen name={str019}>
            {(props) => <Main {...props} extraData={stateUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name={str004} component={Authentication} />
        )}
        <Stack.Screen name={str020}>
          {(props) => <CreateList {...props} extraData={stateUser} />}
        </Stack.Screen>
        <Stack.Screen name={str021}>
          {(props) => <CreateThought {...props} extraData={stateUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
