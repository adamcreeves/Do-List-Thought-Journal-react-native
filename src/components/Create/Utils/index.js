import { Keyboard } from "react-native";

const addTitle = (title, setTitle, resetInput) => {
  if (title) {
    Keyboard.dismiss();
    setTitle(title);
    resetInput("");
  } else {
    alert("You need to name it to proceed");
  }
};

const addListItem = (task, taskList, setListItems, resetInput) => {
  if (!task) {
    alert("Enter a task to add it to your list");
  } else if (!taskList.includes(task.toLowerCase())) {
    Keyboard.dismiss();
    setListItems([task, ...taskList]);
    resetInput("");
  } else {
    alert("You already added that task to your list");
  }
};

const createListButtonFunc = (listName, listItems) => {
  if (!listName) {
    alert("Whoops! You forgot to enter a name");
  } else if (!listItems.length) {
    alert("Whoops! You forgot to add one or more items");
  } else {
    alert("Published successfully");
    console.log("This is the list: ", [listName, listItems]);
  }
};

export { createListButtonFunc, addListItem, addTitle };