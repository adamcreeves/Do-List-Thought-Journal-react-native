import React from "react";
import { View, Text } from "react-native";
import RenderListTitle from "../RenderListTitle";
import SubmitButton from "../SubmitButton";
import TaskList from "../TaskList";
import { styles } from "../../styles";

export default RenderListBody = ({
  name,
  setName,
  items,
  setItems,
  submit,
}) => {
  return (
    <View style={styles.width90}>
      <View style={styles.createListMain}>
        <View style={styles.centerAlign}>
          <Text style={styles.listPreviewText}>List Preview:</Text>
          {name ? (
            <RenderListTitle listName={name} setListName={setName} />
          ) : null}
        </View>
        {items.length ? <TaskList list={items} setList={setItems} /> : null}
      </View>
      <SubmitButton submit={submit} label={"Create List"} />
    </View>
  );
};
