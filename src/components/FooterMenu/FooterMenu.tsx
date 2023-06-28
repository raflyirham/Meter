import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

export function FooterMenu(props, {route}) {
  const currentMenu = props.menu;
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home', {currentMenu: 'Home'})}>
        <View style={styles.menuItem}>
          {currentMenu === 'Home' ? (
            <Image
              source={require('../../../assets/img/icon-home-active.png')}
            />
          ) : (
            <Image source={require('../../../assets/img/icon-home.png')} />
          )}
          <Text style={styles.textMenuItem}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Food', {currentMenu: 'Food'})}>
        <View style={styles.menuItem}>
          {currentMenu === 'Food' ? (
            <Image
              source={require('../../../assets/img/icon-food-active.png')}
            />
          ) : (
            <Image source={require('../../../assets/img/icon-food.png')} />
          )}
          <Text style={styles.textMenuItem}>Food</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Health', {currentMenu: 'Health'})}>
        <View style={styles.menuItem}>
          {currentMenu === 'Health' ? (
            <Image
              source={require('../../../assets/img/icon-health-active.png')}
            />
          ) : (
            <Image source={require('../../../assets/img/icon-health.png')} />
          )}
          <Text style={styles.textMenuItem}>Health</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('Support', {currentMenu: 'Support'})
        }>
        <View style={styles.menuItem}>
          {currentMenu === 'Support' ? (
            <Image
              source={require('../../../assets/img/icon-support-active.png')}
            />
          ) : (
            <Image source={require('../../../assets/img/icon-support.png')} />
          )}
          <Text style={styles.textMenuItem}>Support</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('Profile', {currentMenu: 'Profile'})
        }>
        <View style={styles.menuItem}>
          {currentMenu === 'Profile' ? (
            <Image
              source={require('../../../assets/img/icon-profile-active.png')}
            />
          ) : (
            <Image source={require('../../../assets/img/icon-profile.png')} />
          )}
          <Text style={styles.textMenuItem}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FooterMenu;

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    backgroundColor: '#fff',
    bottom: 0,
    zIndex: 1,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 14,
  },
  textMenuItem: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});
