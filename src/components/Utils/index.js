import { Keyboard } from "react-native";
import { db } from "../../firebase/config";
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

const createListButtonFunc = async (listName, listItems, collectionName) => {
  if (!listName) {
    alert("Whoops! You forgot to enter a name");
  } else if (!listItems.length) {
    alert("Whoops! You forgot to add one or more items");
  } else {
    const list = { name: listName, list: listItems };
    const listDB = db.collection(collectionName);
    listDB
      .add(list)
      .then(() => {
        alert("Published successfully");
        console.log("This is the list: ", list);
      })
      .catch((error) => console.log("There was an error: ", error));
  }
};

const customStackNavigator = { headerShown: false };

const tabBarCustom = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;
    const iconColor = !focused ? "white" : "skyblue";
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

export {
  createListButtonFunc,
  addListItem,
  addTitle,
  tabBarCustom,
  getQuote,
  customStackNavigator,
};
