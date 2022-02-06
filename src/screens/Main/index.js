import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import CreateList from "../CreateList";
import CreateThought from "../CreateThought";
import { str001, str002, str003 } from "../../resources/strings";

const Tab = createBottomTabNavigator();

export default Main = () => {
  return (
    <Tab.Navigator
      initialRouteName={str001}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={str002} component={CreateList} />
      <Tab.Screen name={str001} component={Home} />
      <Tab.Screen name={str003} component={CreateThought} />
    </Tab.Navigator>
  );
};
