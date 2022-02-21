import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authenticationReducer from "./AuthenticationReducer";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistentConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
};
const persistentReducer = persistReducer(
  persistentConfig,
  authenticationReducer
);

const persistentStore = () => {
  let store = createStore(persistentReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default persistentStore;
