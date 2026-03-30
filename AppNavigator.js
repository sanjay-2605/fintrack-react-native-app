import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseListScreen from '../screens/ExpenseListScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="Expenses" component={ExpenseListScreen} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
    </Stack.Navigator>
  );
}
