import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AddEntryContainer from "../../components/AddEntryContainer";
import { ListBody } from "../../components/ListBody";
import RenderListTitle from "../../components/RenderListTitle";
import {
  createListButtonFunc,
  addListItem,
  addTitle,
} from "../../components/Utils";
import { styles } from "../../styles";

export default CreateList = () => {
  const [listEntryText, setListEntryText] = useState("");
  const [listName, setListName] = useState("");
  const [listItems, setListItems] = useState([]);
  const placeholder = listName ? "Enter a task" : "Name your list";

  const renderList = ({ item }) => ListBody(item, setListItems, listItems);

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
        <View style={{ width: "90%" }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              height: 440,
              width: "100%",
              marginVertical: 15,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 25,
                }}
              >
                List Preview:
              </Text>
              {listName !== "" ? (
                <RenderListTitle
                  listName={listName}
                  setListName={setListName}
                />
              ) : null}
            </View>
            {listItems.length ? (
              <SafeAreaView style={{ height: 345, flex: 1 }}>
                <FlatList
                  style={{ height: 345 }}
                  data={listItems}
                  renderItem={renderList}
                  keyExtractor={(item) => item}
                />
              </SafeAreaView>
            ) : null}
          </View>
          <TouchableOpacity
            style={[styles.button, { width: "100%", marginHorizontal: 0 }]}
            onPress={submitList}
          >
            <Text style={styles.listEntryButtonText}>Create List</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
