import { Keyboard } from "react-native";
import { Alert } from "react-native";
import { auth } from "../../firebase/config";
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
} from "../../resources/strings";
import { LOGIN, LOGOUT, REGISTER } from "../../redux/ActionTypes";

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
    alert("You already added that task to your list");
  }
};

const createListButtonFunc = async (
  listName,
  listItems,
  database,
  currentUser,
  navigation
) => {
  const list = {
    name: listName,
    list: listItems,
    author: currentUser.uid,
  };
  await database
    .add(list)
    .then(() => {
      alert("Successfully published!");
    })
    .catch((error) =>
      alert(`There was an error: ${error.errorCode}: ${error.errorMessage}`)
    );
  navigation.navigate(str001);
};

const customStackNavigator = { headerShown: false };

const tabBarCustom = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;
    const iconColor = !focused ? "#FFFFFF" : "#87CEEB";
    if (route.name === str001) {
      iconName = "home";
    } else if (route.name === str002) {
      iconName = "add-circle";
    } else if (route.name === str074) {
      iconName = "people";
    } else if (route.name === str075) {
      iconName = "person-add";
    }
    return <Ionicons name={iconName} size={30} color={iconColor} />;
  },
  tabBarActiveBackgroundColor: "gray",
  tabBarInactiveBackgroundColor: "darkgray",
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

const centerJustified = { justifyContent: "center" };

const registerNewUser = (
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  dispatch
) => {
  if (username === str006) {
    alert("You need to enter a username");
  } else if (username.length < 6) {
    alert("Your username must be 6 character or more");
  } else if (email === str006) {
    alert("You need to enter your email");
  } else if (password.length < 8) {
    alert("Your password needs to be 8 characters or more");
  } else if (confirmPassword === str006) {
    alert("You need to re enter your password");
  } else if (password !== confirmPassword) {
    alert("Your passwords don't match");
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: REGISTER, payload: user });
        console.log(
          `This is the user: ${user} and userCredential: ${userCredential}`
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorCode} - ${errorMessage}`);
      });
    setUsername(str006);
    setEmail(str006);
    setPassword(str006);
    setConfirmPassword(str006);
  }
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
    alert("You need to enter your email");
  } else if (password === str006) {
    alert("You need to enter your password");
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
  Alert.alert("Logout", "Are you sure?", [
    {
      text: "Cancel",
      onPress: () => setLoading(false),
      style: "cancel",
    },
    {
      text: "Confirm",
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
