import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import AppBody from "./AppBody";
import { PersistGate } from "redux-persist/integration/react";
import persistentStore from "../redux/AuthenticationStore";

LogBox.ignoreAllLogs();

export default App = () => {
  const { store, persistor } = persistentStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppBody />
      </PersistGate>
    </Provider>
  );
};
