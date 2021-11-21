import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import ListBody from "../ListBody";

export default TaskList = ({ listWidth, list, setList }) => {
  const renderList = ({ item }) => (
    <ListBody
      listWidth={listWidth}
      item={item}
      setListItems={setList}
      listItems={list}
    />
  );
  return (
    <SafeAreaView style={{ height: 345, flex: 1 }}>
      <FlatList
        style={{ height: 345 }}
        data={list}
        renderItem={renderList}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};
