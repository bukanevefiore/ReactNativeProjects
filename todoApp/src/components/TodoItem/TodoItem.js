import React, { memo, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./TodoItem.style";

const TodoItem = ({ todo, todoData, setToDo }) => {
  const [completed, setCompleted] = useState(todoData.completed);

  const completionStatus = () => {
    setToDo(
      todo.map((item) =>
        item.id === todoData.id ? { ...item, completed: !completed } : item
      )
    );
    setCompleted(!completed);
  };

  const handleDelete = () =>
    setToDo(todo.filter((item) => item.id !== todoData.id));

  return (
    <TouchableOpacity
      style={[styles.container, completed && styles.containerCompleted]}
      onPress={completionStatus}
      onLongPress={handleDelete}>
      <Text style={[styles.title, completed && styles.titleCompleted]}>
        {todoData.title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(TodoItem);
