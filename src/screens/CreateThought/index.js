import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AddEntryContainer from "../../components/Create/AddEntryContainer";
import { styles } from "../../styles";
import {
  addListItem,
  addTitle,
  centerJustified,
  createListButtonFunc,
} from "../../components/Utils";
import RenderListBody from "../../components/Create/RenderListBody";
import { str006, str009, str011, str013 } from "../../resources/strings";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/config";

export default CreateThought = (props) => {
  const [loading, setLoading] = useState(false);
  const [thoughtEntryText, setThoughtEntryText] = useState(str006);
  const [thoughtName, setThoughtName] = useState(str006);
  const [thoughts, setThoughts] = useState([]);
  const navigation = useNavigation();
  const stateUser = props.stateUser;
  const thoughtDB = db.collection(`${stateUser?.uid}`);
  const placeholder = thoughtName
    ? "Enter a thought"
    : "Enter title for your thoughts";

  const addTitleFunc = () =>
    addTitle(thoughtEntryText, setThoughtName, setThoughtEntryText);

  const addThoughtFunc = () =>
    addListItem(thoughtEntryText, thoughts, setThoughts, setThoughtEntryText);

  const submitThoughts = () => {
    setLoading(true);
    createListButtonFunc(
      thoughtName,
      thoughts,
      thoughtDB,
      stateUser,
      navigation
    );
    setThoughtName(str006);
    setThoughts([]);
  };

  const mainViewStyle =
    thoughtName || thoughts.length
      ? styles.container
      : [styles.container, centerJustified];

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: "#87CEEB" }]}>
        <ActivityIndicator size={"large"} color={"#FFFFFF"} />
      </View>
    );
  }

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
