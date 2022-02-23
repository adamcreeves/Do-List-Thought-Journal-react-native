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
  str006,
  str009,
  str011,
  str013,
  str091,
  str092,
  str093,
} from "../../resources/strings";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/config";
import Loading from "../../components/Loading";

export default CreateThought = (props) => {
  const [loading, setLoading] = useState(false);
  const [thoughtEntryText, setThoughtEntryText] = useState(str006);
  const [thoughtName, setThoughtName] = useState(str006);
  const [thoughts, setThoughts] = useState([]);
  const navigation = useNavigation();
  const stateUser = props.stateUser;
  const thoughtDB = db.collection(`${stateUser?.uid}`);
  const placeholder = thoughtName ? str092 : str093;

  const addTitleFunc = () =>
    addTitle(thoughtEntryText, setThoughtName, setThoughtEntryText);

  const addThoughtFunc = () =>
    addListItem(thoughtEntryText, thoughts, setThoughts, setThoughtEntryText);

  const submitThoughts = () => {
    if (thoughtName && thoughts.length && thoughtDB) {
      setLoading(true);
      createListButtonFunc(thoughtName, thoughts, thoughtDB, stateUser);
      setThoughtName(str006);
      setThoughts([]);
      navigation.navigate(str001);
    } else {
      alert(str091);
    }
  };

  const mainViewStyle =
    thoughtName || thoughts.length
      ? styles.container
      : [styles.container, centerJustified];

  if (loading) {
    return <Loading />;
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
