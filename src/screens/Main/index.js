import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { str001, str002 } from "../../resources/strings";
import CreateBody from "../../components/Create/CreateBody";
import { tabBarCustom } from "../../components/Utils";
import HomeBody from "../../components/HomeBody";

const Tab = createBottomTabNavigator();

const user = false;

export default Main = () => {
  return (
    <Tab.Navigator initialRouteName={str001} screenOptions={tabBarCustom}>
      <Tab.Screen name={str001} component={HomeBody} />
      <Tab.Screen name={str002} component={CreateBody} />
    </Tab.Navigator>
  );
};
