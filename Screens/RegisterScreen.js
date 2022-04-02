import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {guitar, cake} from '../src/images';
import {GradientButton} from '../Components/Button';
import {Input, Picker} from '../Components/Input';
import CountryPicker from 'react-native-country-picker-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;

const RegisterScreen = props => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    residence: '',
    idd: '',
    phone: '',
    gender: '',
    dob: new Date(1598051730000),
  });

  const [showData, setShowData] = useState(false);

  const register = () => {
    if (userData.firstName.replace(/\s/g, '').length < 1)
      return alert('Invalid First Name');
    if (userData.lastName.replace(/\s/g, '').length < 1)
      return alert('Invalid Last Name');
    if (!userData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
      return alert('Invalid Email');
    if (userData.nationality.length < 1)
      return alert('Invalid Nationality Name');
    if (userData.residence.length < 1) return alert('Invalid Residence Name');

    if (userData.dob.getTime() === 1598051730000)
      return alert('Invalid Date of Birth');
    if (userData.gender.length < 1) return alert('Invalid Gender');
    return alert(' Successfully Submitted :-)');
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowData(false);
    setUserData({...userData, dob: currentDate});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-left"
          size={20}
          color="#000"
          style={styles.icon}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={styles.title}>Almost there!</Text>
        <Text style={styles.subTitle}>
          Complete the form below to create{'\n'}your Ready to Travel account.
        </Text>
        <Text style={styles.paleFont}>*Mandatory</Text>
      </View>
      <Image source={guitar} style={styles.guitarImg} resizeMode="contain" />
      <View style={styles.form}>
        <ScrollView>
          <Input
            placeholder="Regina"
            title="First Name *"
            onChangeText={a => setUserData({...userData, firstName: a})}
          />
          <Input
            placeholder="Chan"
            title="Last Name *"
            onChangeText={a => setUserData({...userData, lastName: a})}
          />
          <Input
            placeholder="regina@codigo.co"
            title="Email Address *"
            onChangeText={a => setUserData({...userData, email: a})}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.InputContainer}>
              <Text style={styles.title1}>Date of Birth *</Text>
              <Text
                onPress={() => setShowData(true)}
                style={{
                  fontFamily: 'Chivo-Bold',
                  color: '#0000008f',
                  marginVertical: 5,
                }}>
                {userData.dob.getTime() !== 1598051730000
                  ? userData.dob
                      .toJSON()
                      .slice(0, 10)
                      .split('-')
                      .reverse()
                      .join('/')
                  : 'DD/MM/YYYY'}
              </Text>
            </View>
            <Image source={cake} style={styles.cakeImg} resizeMode="contain" />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.femaleBtn,
                  userData.gender === 'female' && styles.gender,
                ]}
                onPress={() => {
                  setUserData({...userData, gender: 'female'});
                }}>
                <Text style={styles.title1}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.maleBtn,
                  userData.gender === 'male' && styles.gender,
                ]}
                onPress={() => {
                  setUserData({...userData, gender: 'male'});
                }}>
                <Text style={styles.title1}>Male</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Picker
            title="Nationality *"
            onSelect={a => setUserData({...userData, nationality: a.name})}
            placeholder={`${
              userData.nationality ? userData.nationality : 'Select Country'
            }`}
          />
          <Picker
            title="Country of Residence *"
            placeholder={`${
              userData.residence ? userData.residence : 'Select Country'
            }`}
            onSelect={a => setUserData({...userData, residence: a.name})}
          />

          <Text style={styles.title1}>Mobile no. (Optional)</Text>
          <View
            style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            <View style={{padding: 0, marginRight: 10}}>
              <CountryPicker
                withCallingCode
                placeholder={`${userData.idd ? userData.idd : '+00'}`}
                withCallingCodeButton
                onSelect={country =>
                  setUserData({...userData, idd: `+${country.callingCode[0]}`})
                }
              />
            </View>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="xxxxxxxxx"
              placeholderTextColor="#0000008f"
              onChangeText={a => {
                setUserData({...userData, phone: a});
              }}
            />
          </View>
        </ScrollView>
      </View>
      <GradientButton
        title="Create a new account"
        onPress={() => {
          register();
        }}
      />
      {showData && (
        <DateTimePicker value={userData.dob} mode="date" onChange={onChange} />
      )}
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: width,
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },

  header: {
    height: 200,
    padding: 20,
    justifyContent: 'space-between',
    width: width,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Chivo-Bold',
    marginVertical: 5,
    color: '#000',
  },
  subTitle: {
    fontSize: 13,
    fontFamily: 'Chivo-Bold',
    marginVertical: 5,
    color: '#000',
  },
  paleFont: {
    fontSize: 10,
    fontFamily: 'Chivo-Bold',
    color: '#0000008f',
    marginVertical: 5,
  },
  guitarImg: {
    height: 200,
    width: 100,
    alignSelf: 'flex-end',
    marginTop: -118,
    marginBottom: -82,
  },
  form: {
    zIndex: -1,
    width: width,
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: '#0000000f',
  },
  InputContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#0000000f',
    marginVertical: 10,
  },
  title1: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#0000005f',
    marginVertical: 5,
  },
  input: {
    flex: 1,
    padding: 0,
    fontFamily: 'Chivo-Bold',
    color: '#000000',
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#0000005f',
  },
  cakeImg: {
    marginLeft: -45,
    width: 50,
    height: 30,
  },
  maleBtn: {
    marginLeft: -35,
    height: 40,
    width: '60%',
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
  },
  femaleBtn: {
    height: 40,
    width: '60%',
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
  },
  gender: {
    borderColor: 'lightblue',
    borderWidth: 2,
    backgroundColor: '#fff',
    zIndex: 100,
  },
});
