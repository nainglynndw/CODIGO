import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';

const Input = props => {
  return (
    <View style={styles.InputContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#0000008f"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const Picker = props => {
  return (
    <View style={styles.InputContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <CountryPicker
        containerButtonStyle={{
          marginBottom: 5,
          paddingTop: 5,
        }}
        placeholder={props.placeholder}
        withCallingCodeButton
        onSelect={props.onSelect}
      />
    </View>
  );
};

export {Input, Picker};

const styles = StyleSheet.create({
  InputContainer: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#0000000f',
    marginVertical: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0000005f',
  },
  input: {
    padding: 0,
    fontFamily: 'Chivo-Bold',
    color: '#000000',
  },
});
