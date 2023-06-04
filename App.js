import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/HomePage/HomePage';
import MessageBoard from './src/screens/MessagesBoard/MessageBoard';
import HookExample from './src/components/HookExample/HookExample';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';

export default function App() {
  return (
    <ForgotPassword />
  );
}
