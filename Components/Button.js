import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <View></View>
      <Text style={styles.title}>{props.title}</Text>
      {props.icon ? (
        <Icon
          name="facebook-official"
          size={30}
          color="#fff"
          style={styles.icon}
        />
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
};

const GradientButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btn, {paddingHorizontal: 0}]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#a0e3e8', '#1b99b4', '#4f87aa']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {Button, GradientButton};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#2b7de9',
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#ffffff',
  },
});
