import React from "react";
import { View, Text } from "react-native";
import RenderListTitle from "../RenderListTitle";
import SubmitButton from "../SubmitButton";
import TaskList from "../TaskList";
import { styles } from "../../../../styles";

export default RenderListBody = ({
  previewTitle,
  name,
  setName,
  listWidth,
  items,
  setItems,
  submit,
  submitLabel,
}) => {
  return (
    <View style={styles.width90}>
      <View style={styles.createListMain}>
        <View style={styles.centerAlign}>
          <Text style={styles.listPreviewText}>{previewTitle}</Text>
          {name ? (
            <RenderListTitle listName={name} setListName={setName} />
          ) : null}
        </View>
        {items.length ? (
          <TaskList listWidth={listWidth} list={items} setList={setItems} />
        ) : null}
      </View>
      <SubmitButton submit={submit} label={submitLabel} />
    </View>
  );
};
