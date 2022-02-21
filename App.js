import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/Main";
import { str004, str019, str020, str021 } from "./src/resources/strings";
import CreateList from "./src/screens/CreateList";
import CreateThought from "./src/screens/CreateThought";
import { customStackNavigator } from "./src/components/Utils";
import Authentication from "./src/screens/Authentication";
import { auth } from "./src/firebase/config";

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

export default App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <></>;
  }

  console.log("this is the currentUser: ", user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={customStackNavigator}>
        {user ? (
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
