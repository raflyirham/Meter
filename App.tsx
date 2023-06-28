import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Food from './src/pages/Food/Food';
import Health from './src/pages/Health/Health';
import Profile from './src/pages/Profile/Profile';
import Support from './src/pages/Support/Support';
import SupportChat from './src/pages/SupportChat/SupportChat';
import MentalHealthStatistics from './src/pages/MentalHealthStatistics/MentalHealthStatistics';
import SurveyHistory from './src/pages/SurveyHistory/SurveyHistory';
import AccountSetting from './src/pages/AccountSetting/AccountSetting';
import ApplicationSetting from './src/pages/ApplicationSetting/ApplicationSetting';
import AboutUs from './src/pages/AboutUs/AboutUs';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import Register from './src/pages/Register/Register';

const Stack = createNativeStackNavigator();

function App({route, navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Health" component={Health} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="SupportChat" component={SupportChat} />
        <Stack.Screen
          name="MentalHealthStatistics"
          component={MentalHealthStatistics}
        />
        <Stack.Screen name="SurveyHistory" component={SurveyHistory} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        <Stack.Screen
          name="ApplicationSetting"
          component={ApplicationSetting}
        />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
