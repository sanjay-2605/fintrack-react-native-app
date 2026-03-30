import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';

export default function DashboardScreen({ navigation }) {
  const { expenses } = useContext(ExpenseContext);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Dashboard</Text>

      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />

      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.title} - ₹{item.amount}</Text>
        )}
      />
    </View>
  );
}
