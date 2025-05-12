// components/TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={[styles.item, task.completed && styles.completed]}
      >
        <Text style={[styles.text, task.completed && styles.textDone]}>
          {task.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteBtn}>
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  completed: {
    backgroundColor: '#d3f9d8',
  },
  text: {
    fontSize: 16,
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteBtn: {
    marginLeft: 10,
    padding: 10,
  },
  deleteText: {
    fontSize: 18,
  },
});
