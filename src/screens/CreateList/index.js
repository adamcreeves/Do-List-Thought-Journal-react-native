import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import AddEntryContainer from "../../components/Create/AddEntryContainer";
import RenderListBody from "../../components/Create/RenderListBody";
import {
  addListItem,
  addTitle,
  createListButtonFunc,
} from "../../components/Create/Utils";

import { styles } from "../../styles";

export default CreateList = () => {
  const [listEntryText, setListEntryText] = useState("");
  const [listName, setListName] = useState("");
  const [listItems, setListItems] = useState([]);
  const placeholder = listName ? "Enter a task" : "Name your list";

  const addTitleFunc = () =>
    addTitle(listEntryText, setListName, setListEntryText);

  const addTaskFunc = () =>
    addListItem(listEntryText, listItems, setListItems, setListEntryText);

  const submitList = () => createListButtonFunc(listName, listItems);

  const mainViewStyle =
    listName || listItems.length
      ? styles.container
      : [styles.container, { justifyContent: "center" }];

  return (
    <View style={mainViewStyle}>
      <StatusBar style="auto" />
      <AddEntryContainer
        containerStyle={styles.listBodyContainer}
        listEntryStyle={styles.listEntry}
        placeholderText={placeholder}
        setListFunc={setListEntryText}
        listEntryValue={listEntryText}
        onSubmitEditing={!listName ? addTitleFunc : addTaskFunc}
        buttonStyle={[styles.button, styles.listEntryButton]}
        buttonFunc={!listName ? addTitleFunc : addTaskFunc}
        buttonTextStyle={styles.listEntryButtonText}
        buttonText={"Next"}
      />
      {listName || listItems.length ? (
        <RenderListBody
          previewTitle={"List Preview:"}
          name={listName}
          setName={setListName}
          listWidth={260}
          items={listItems}
          setItems={setListItems}
          submit={submitList}
          submitLabel={"Publish list"}
        />
      ) : null}
    </View>
  );
};
