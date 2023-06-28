import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

function HeaderTitle(props) {
  const imgUrl = props.imgUrl;
  const title = props.title;

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={imgUrl}>
        <View style={styles.overlayView} />
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
}

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minWidth: '100%',
    minHeight: 184,
    resizeMode: 'contain',
  },
  overlayView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
    textAlign: 'center',
  },
});
