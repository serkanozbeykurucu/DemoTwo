import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const handlePress = () => {
    Alert.alert(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
      <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1}} onChangeText={setText} value={text} placeholder="Enter text here" />
      <Button  onPress={handlePress} title="Click Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 60,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  button: {
    color: 'blue',
    marginTop: 20,
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center', 
  }
});
