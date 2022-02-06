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
import {
  str004,
  str005,
  str006,
  str007,
  str008,
  str009,
  str010,
  str012,
} from "../../resources/strings";

import { styles } from "../../styles";

export default CreateList = () => {
  const [listEntryText, setListEntryText] = useState(str006);
  const [listName, setListName] = useState(str006);
  const [listItems, setListItems] = useState([]);
  const placeholder = listName ? str007 : str008;

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
        buttonText={str009}
      />
      {listName || listItems.length ? (
        <RenderListBody
          previewTitle={str010}
          name={listName}
          setName={setListName}
          listWidth={260}
          items={listItems}
          setItems={setListItems}
          submit={submitList}
          submitLabel={str012}
        />
      ) : null}
    </View>
  );
};
