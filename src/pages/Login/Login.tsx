import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.loginScreen}>
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
          <Text style={styles.loginMessage}>
            Welcome, let's get started now!
          </Text>
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
              placeholder="Mobile or email address"
              value={email}
              onChangeText={text => setEmail(text)}
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
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textForgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnLogin}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Home', {currentMenu: 'Home'})}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textAccount}>Don't have an account?</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  gradientContainer: {
    height: '100%',
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

export default Login;
