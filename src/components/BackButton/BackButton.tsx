import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

function BackButton({route, navigation}) {
  // const navigation = useNavigation();
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.txtBack}>{'< Back'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  txtBack: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '400',
  },
});
