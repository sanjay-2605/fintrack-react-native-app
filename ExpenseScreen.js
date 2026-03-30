import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';

export default function AddExpenseScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { addExpense } = useContext(ExpenseContext);

  const handleAddExpense = () => {
    addExpense({ title, amount });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Expense Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Amount"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
