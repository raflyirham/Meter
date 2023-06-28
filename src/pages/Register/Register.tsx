import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

function Register({navigation}) {
  return (
    <View style={styles.parentContainer}>
      <ScrollView style={styles.registerScreen}>
        <LinearGradient
          colors={['#062C8E', '#9587CF']}
          style={styles.gradientContainer}>
          <Image
            source={require('../../../assets/img/Title.png')}
            style={styles.loginLogo}
          />
          <View style={styles.loginTitle}>
            {/* <Text style={styles.loginTitleText}>Mental Health is Awesome</Text> */}
            <Image
              style={styles.loginCaption}
              source={require('../../../assets/img/Caption.png')}
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.loginMessage}>Register</Text>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../../assets/img/account.png')}
              />
              <Image
                style={styles.inputLine}
                source={require('../../../assets/img/line.png')}
              />
              <TextInput style={styles.inputText} placeholder="Email address" />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../../assets/img/account.png')}
              />
              <Image
                style={styles.inputLine}
                source={require('../../../assets/img/line.png')}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Confirm Email address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../../assets/img/password.png')}
              />
              <Image
                style={styles.inputLine}
                source={require('../../../assets/img/line.png')}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../../assets/img/password.png')}
              />
              <Image
                style={styles.inputLine}
                source={require('../../../assets/img/line.png')}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Confirm Password"
                secureTextEntry
              />
            </View>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnLogin} activeOpacity={0.9}>
              <Text style={styles.textLogin}>Register</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textAccount}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    minHeight: '100%',
  },
  registerScreen: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  gradientContainer: {
    height: '100%',
    paddingBottom: 10,
  },
  loginLogo: {
    height: 229,
    width: 223,
    alignSelf: 'center',
    marginTop: 53,
  },
  loginTitle: {
    width: 'auto',
    height: 'auto',
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#FFFFE7',
    borderRadius: 30,
  },
  loginTitleText: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginCaption: {
    width: '90%',
    height: 21,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  formContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  loginMessage: {
    fontSize: 15,
    color: 'black',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  inputIcon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  inputLine: {
    width: 2,
    resizeMode: 'contain',
  },
  inputText: {
    marginLeft: 8,
  },
  textForgotPassword: {
    marginTop: 10,
    alignSelf: 'flex-end',
    color: '#000',
    fontSize: 14,
  },
  btnContainer: {
    marginTop: 10,
  },
  btnLogin: {
    alignSelf: 'center',
    backgroundColor: '#203E8D',
    width: '40%',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 25,
    marginTop: 15,
  },
  textLogin: {
    color: '#fff',
    textAlign: 'center',
  },
  textAccount: {
    marginTop: 15,
    color: '#000',
    textAlign: 'center',
  },
});
