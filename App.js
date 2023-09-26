import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [value, onChangeText] = 	React.useState('Default Value');  

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>My Basic App</Text>
      <TextInput style={styles.edit} placeholder='Enter your text here'
	    onChangeText={text => onChangeText(text)}
      clearTextOnFocus="true"
      value={value}
    />
      <Text>{value}</Text>
      <StatusBar style="auto" />
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
  edit: {
    borderColor: 'black',
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  }
});

