import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {cloud, welcome} from '../src/images';
import {Button, GradientButton} from '../Components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <Image source={welcome} style={styles.welcomeImg} />
      <Image source={cloud} style={styles.cloudImg} resizeMode="contain" />
      <View style={styles.btnGroup}>
        <Text style={styles.title}>Welcome to {'\n'}Ready To Travel</Text>
        <Text style={styles.subTitle}>
          Sign up with Facebook for the most {'\n'}fulfilling trip planning
          experience with us!
        </Text>
        <Button title="Log in with Facebook" icon={true} />
        <Button title="Login with email Address" />
        <GradientButton
          title="Create a new account"
          onPress={() => {
            props.navigation.navigate('Register');
          }}
        />
      </View>
      <Icon name="close" size={20} color="#000" style={styles.icon} />
      <StatusBar
        translucent
        backgroundColor="#00000000"
        barStyle="dark-content"
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcomeImg: {
    width: width,
    height: height,
  },
  cloudImg: {
    top: -height / 1.25,
    width: width,
    height: height,
  },
  btnGroup: {
    paddingHorizontal: 20,
    zIndex: 100,
    top: (-2 * height) / 1.35,
    width: width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000000',
  },
  subTitle: {
    marginTop: 10,
    color: '#000000',
    fontSize: 15,
    marginBottom: 20,
    fontFamily: 'Chivo-Regular',
  },
  icon: {
    position: 'absolute',
    left: 25,
    top: StatusBar.currentHeight + 15,
  },
});
