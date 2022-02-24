import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { tabBarCustom } from "../../components/Utils";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { str074, str075 } from "../../../resources/strings";

const Tab = createBottomTabNavigator();

export default Authentication = () => {
  return (
    <Tab.Navigator initialRouteName={str074} screenOptions={tabBarCustom}>
      <Tab.Screen name={str074} component={Login} />
      <Tab.Screen name={str075} component={Register} />
    </Tab.Navigator>
  );
};
