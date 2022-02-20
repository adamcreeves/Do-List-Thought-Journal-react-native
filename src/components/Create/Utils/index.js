import { Keyboard } from "react-native";
import { db } from "../../../firebase/config";
import { str006, str016, str017 } from "../../../resources/strings";

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

const createListButtonFunc = async (listName, listItems) => {
  if (!listName) {
    alert("Whoops! You forgot to enter a name");
  } else if (!listItems.length) {
    alert("Whoops! You forgot to add one or more items");
  } else {
    const list = { name: listName, list: listItems };
    const listDB = db.collection("lists");
    listDB
      .add(list)
      .then(() => {
        alert("Published successfully");
        console.log("This is the list: ", list);
      })
      .catch((error) => console.log("There was an error: ", error));
  }
};

export { createListButtonFunc, addListItem, addTitle };
