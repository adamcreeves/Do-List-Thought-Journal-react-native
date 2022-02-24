import { Keyboard } from "react-native";
import { Alert } from "react-native";
import { auth } from "../../../firebase/config";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  str001,
  str002,
  str006,
  str016,
  str017,
  str022,
  str023,
  str024,
  str025,
  str026,
  str027,
  str028,
  str029,
  str030,
  str031,
  str032,
  str033,
  str034,
  str035,
  str036,
  str037,
  str038,
  str039,
  str040,
  str041,
  str042,
  str043,
  str044,
  str045,
  str046,
  str047,
  str048,
  str049,
  str050,
  str051,
  str052,
  str053,
  str054,
  str055,
  str056,
  str057,
  str058,
  str059,
  str060,
  str061,
  str062,
  str063,
  str064,
  str065,
  str066,
  str067,
  str068,
  str069,
  str070,
  str071,
  str072,
  str073,
  str074,
  str075,
  str076,
  str083,
  str094,
  str095,
  str096,
  str097,
  str098,
  str099,
  str100,
  str101,
  str102,
  str103,
  str104,
  str105,
  str106,
  str107,
  str108,
  str109,
  str110,
  str111,
  str112,
} from "../../../resources/strings";
import { LOGIN, LOGOUT, REGISTER } from "../../../redux/ActionTypes";
import { skyblue, white } from "../../../resources/colors";

const addTitle = (title, setTitle, resetInput) => {
  if (title) {
    Keyboard.dismiss();
    setTitle(title);
    resetInput(str006);
  } else {
    alert(str016);
  }
};

const addListItem = (task, taskList, setListItems, resetInput) => {
  if (!task) {
    alert(str017);
  } else if (!taskList.includes(task.toLowerCase())) {
    Keyboard.dismiss();
    setListItems([task, ...taskList]);
    resetInput(str006);
  } else {
    alert(str094);
  }
};

const createListButtonFunc = async (
  listName,
  listItems,
  database,
  currentUser
) => {
  const list = {
    name: listName,
    list: listItems,
    author: currentUser.uid,
  };
  await database
    .add(list)
    .then(() => {
      alert(str095);
    })
    .catch((error) =>
      alert(`${str096}${error.errorCode}${str097}${error.errorMessage}`)
    );
};

const customStackNavigator = { headerShown: false };

const tabBarCustom = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;
    const iconColor = !focused ? white : skyblue;
    if (route.name === str001) {
      iconName = str098;
    } else if (route.name === str002) {
      iconName = str099;
    } else if (route.name === str074) {
      iconName = str100;
    } else if (route.name === str075) {
      iconName = str101;
    }
    return <Ionicons name={iconName} size={30} color={iconColor} />;
  },
  tabBarActiveBackgroundColor: str102,
  tabBarInactiveBackgroundColor: str103,
  headerShown: false,
  tabBarShowLabel: false,
});

const quoteBank = [
  str022,
  str023,
  str024,
  str025,
  str026,
  str027,
  str028,
  str029,
  str030,
  str031,
  str032,
  str033,
  str034,
  str035,
  str036,
  str037,
  str038,
  str039,
  str040,
  str041,
  str042,
  str043,
  str044,
  str045,
  str046,
  str047,
  str048,
  str049,
  str050,
  str051,
  str052,
  str053,
  str054,
  str055,
  str056,
  str057,
  str058,
  str059,
  str060,
  str061,
  str062,
  str063,
  str064,
  str065,
  str066,
  str067,
  str068,
  str069,
  str070,
  str071,
  str072,
  str073,
];

const getQuote = () => {
  const randomIndex = Math.floor(Math.random() * quoteBank.length);
  return quoteBank[randomIndex] || str006;
};

const centerJustified = { justifyContent: str076 };

const registerNewUser = (
  username,
  email,
  password,
  location,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setLocation,
  dispatch,
  database
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userRegistration = { username, email, location, uid: user.uid };
      const newDb = database.collection(`${user.uid}`);
      newDb
        .add(userRegistration)
        .then(() => {
          alert(str104);
        })
        .catch((error) =>
          alert(`${str096}${error.errorCode}${str097}${error.errorMessage}`)
        );
      dispatch({ type: REGISTER, payload: user });
    })
    .then(() => {
      setUsername(str006);
      setEmail(str006);
      setPassword(str006);
      setConfirmPassword(str006);
      setLocation(str006);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${str105}${errorCode}${str106}${errorMessage}`);
    });
};

const loginUser = (
  email,
  setEmail,
  password,
  setPassword,
  dispatch,
  setLoading
) => {
  if (email === str006) {
    alert(str107);
  } else if (password === str006) {
    alert(str108);
  } else {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setLoading(true);
        const user = userCredential.user;
        dispatch({ type: LOGIN, payload: user });
        setEmail(str006);
        setPassword(str006);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`);
      });
  }
};

const logoutUser = (dispatch, setLoading) => {
  setLoading(true);
  Alert.alert(str083, str109, [
    {
      text: str110,
      onPress: () => setLoading(false),
      style: str111,
    },
    {
      text: str112,
      onPress: () => {
        auth.signOut();
        dispatch({ type: LOGOUT, payload: {} });
      },
    },
  ]);
};

export {
  createListButtonFunc,
  addListItem,
  addTitle,
  tabBarCustom,
  getQuote,
  customStackNavigator,
  centerJustified,
  registerNewUser,
  loginUser,
  logoutUser,
};
