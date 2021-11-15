import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListEntryContainer from "../../components/ListEntryContainer";
import { styles } from "../../styles";

export default CreateList = () => {
  const [listEntryText, setListEntryText] = useState("");
  const [listName, setListName] = useState("");
  const [listItems, setListItems] = useState([]);
  const placeholder = listName ? "Enter a task" : "Name your list";

  const addTitle = () => {
    if (listEntryText) {
      Keyboard.dismiss();
      setListName(listEntryText);
      setListEntryText("");
    } else {
      alert("You need to name your list");
    }
  };

  const addListItem = () => {
    if (!listItems.includes(listEntryText)) {
      Keyboard.dismiss();
      setListItems([listEntryText, ...listItems]);
      setListEntryText("");
    } else if (listEntryText === "") {
      alert("Enter a task to add it to your list");
    } else {
      alert("You already added that task to your list");
    }
  };

  const renderList = ({ item }) => {
    return (
      <View
        style={{
          width: 220,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: "black",
            flexDirection: "row",
            width: 190,
            marginVertical: 3,
            fontSize: 18,
          }}
        >
          {"\u25CF  " + item}
        </Text>
        <TouchableOpacity
          onPress={() => setListItems(listItems.filter((x) => x !== item))}
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 6,
          }}
        >
          <Image source={require("../../../assets/deleteicon.png")} />
        </TouchableOpacity>
      </View>
    );
  };

  const createListBtnFunc = () => {
    if (!listName) {
      alert("Whoops! You forgot to name your list");
    } else if (!listItems.length) {
      alert("Whoops! You forgot to add one or more tasks to your list");
    } else {
      alert("Your list has been created");
      console.log("This is the list: ", [listName, listItems]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListEntryContainer
        containerStyle={styles.listBodyContainer}
        listEntryStyle={styles.listEntry}
        placeholderText={placeholder}
        setListFunc={setListEntryText}
        listEntryValue={listEntryText}
        onSubmitEditing={!listName ? addTitle : addListItem}
        buttonStyle={[styles.button, styles.listEntryButton]}
        buttonFunc={!listName ? addTitle : addListItem}
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    {listName}
                  </Text>
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => setListName("")}
                  >
                    <Image
                      style={{ height: 18, width: 18 }}
                      source={require("../../../assets/pencil.png")}
                    />
                  </TouchableOpacity>
                </View>
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
            onPress={createListBtnFunc}
          >
            <Text style={styles.listEntryButtonText}>Create List</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
