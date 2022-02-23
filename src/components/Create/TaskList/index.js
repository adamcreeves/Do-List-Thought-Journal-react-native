import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "../../../styles";
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
    <SafeAreaView style={styles.taskListView}>
      <FlatList
        style={styles.taskListBody}
        data={list}
        renderItem={renderList}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};
