import React, { useState } from "react";
import { View } from "react-native";
import AddEntryContainer from "../../components/Create/AddEntryContainer";
import { styles } from "../../styles";
import {
  addListItem,
  addTitle,
  centerJustified,
  createListButtonFunc,
} from "../../components/Utils";
import RenderListBody from "../../components/Create/RenderListBody";
import {
  str001,
  str006,
  str009,
  str011,
  str013,
} from "../../resources/strings";
import { useNavigation } from "@react-navigation/native";

export default CreateThought = () => {
  const [thoughtEntryText, setThoughtEntryText] = useState(str006);
  const [thoughtName, setThoughtName] = useState(str006);
  const [thoughts, setThoughts] = useState([]);
  const nav = useNavigation();
  const placeholder = thoughtName
    ? "Enter a thought"
    : "Enter title for your thoughts";

  const addTitleFunc = () =>
    addTitle(thoughtEntryText, setThoughtName, setThoughtEntryText);

  const addThoughtFunc = () =>
    addListItem(thoughtEntryText, thoughts, setThoughts, setThoughtEntryText);

  const submitThoughts = () => {
    createListButtonFunc(thoughtName, thoughts, "thoughts");
    setThoughtName(str006);
    setThoughts([]);
    nav.navigate(str001);
  };

  const mainViewStyle =
    thoughtName || thoughts.length
      ? styles.container
      : [styles.container, centerJustified];

  return (
    <View style={mainViewStyle}>
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
        buttonText={str009}
      />
      {thoughtName || thoughts.length ? (
        <RenderListBody
          previewTitle={str011}
          name={thoughtName}
          setName={setThoughtName}
          listWidth={300}
          items={thoughts}
          setItems={setThoughts}
          submit={submitThoughts}
          submitLabel={str013}
        />
      ) : null}
    </View>
  );
};
