import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddEntryContainer from "../../components/AddEntryContainer";
import { styles } from "../../styles";
import {
  addListItem,
  addTitle,
  createListButtonFunc,
} from "../../components/Utils";
import RenderListBody from "../../components/RenderListBody";

export default CreateThought = () => {
  const [thoughtEntryText, setThoughtEntryText] = useState("");
  const [thoughtName, setThoughtName] = useState("");
  const [thoughts, setThoughts] = useState([]);
  const placeholder = thoughtName
    ? "Enter a thought"
    : "Enter title for your thoughts";

  const addTitleFunc = () =>
    addTitle(thoughtEntryText, setThoughtName, setThoughtEntryText);

  const addThoughtFunc = () =>
    addListItem(thoughtEntryText, thoughts, setThoughts, setThoughtEntryText);

  const submitThoughts = () => createListButtonFunc(thoughtName, thoughts);

  const mainViewStyle =
    thoughtName || thoughts.length
      ? styles.container
      : [styles.container, { justifyContent: "center" }];

  return (
    <View style={mainViewStyle}>
      <StatusBar style="auto" />
      <AddEntryContainer
        containerStyle={styles.listBodyContainer}
        listEntryStyle={styles.listEntry}
        placeholderText={placeholder}
        setListFunc={setThoughtEntryText}
        listEntryValue={thoughtEntryText}
        onSubmitEditing={!thoughtName ? addTitleFunc : addThoughtFunc}
        buttonStyle={[styles.button, styles.listEntryButton]}
        buttonFunc={!thoughtName ? addTitleFunc : addThoughtFunc}
        buttonTextStyle={styles.listEntryButtonText}
        buttonText={"Next"}
      />
      {thoughtName || thoughts.length ? (
        <RenderListBody
          previewTitle={"Thought Preview:"}
          name={thoughtName}
          setName={setThoughtName}
          listWidth={300}
          items={thoughts}
          setItems={setThoughts}
          submit={submitThoughts}
          submitLabel={"Create thought"}
        />
      ) : null}
    </View>
  );
};
