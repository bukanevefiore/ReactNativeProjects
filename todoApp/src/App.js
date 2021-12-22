import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import styles from './App.styles';


const App = () => {
  const [toDo, setToDo] = useState([]);

  const renderTodo = ({ item }) => (
    <TodoItem setToDo={setToDo} todo={toDo} todoData={item} />
  );
  const toDoLength = toDo.filter((todo) => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Things To Do: {toDoLength}</Text>
        <FlatList data={toDo} renderItem={renderTodo} />
      </View>
      <AddTodo toDo={toDo} setToDo={setToDo} />
    </SafeAreaView>
  );
};

export default App;

