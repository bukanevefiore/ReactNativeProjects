import React, { memo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./AddTodo.style";

const AddTodo = ({ setToDo, toDo }) => {
  const [inputText, setInputText] = useState("");

  const saveTodo = () => {
    const isDuplicate = toDo.find((todo) => todo.title === inputText);
    if (inputText && !isDuplicate) {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: inputText,
        completed: false,
      };
      setToDo([...toDo, newTodo]);
      setInputText("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="To do..."
        placeholderTextColor="#4b830d"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity
        style={[styles.button, !inputText && { backgroundColor: "#6e6d6d" }]}
        onPress={saveTodo}
        disabled={!inputText}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(AddTodo);
