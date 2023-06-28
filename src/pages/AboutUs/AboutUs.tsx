import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import BackButton from '../../components/BackButton/BackButton';
import FooterMenu from '../../components/FooterMenu/FooterMenu';

const AboutUs = ({route, navigation}) => {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.aboutScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/aboutus-background.png')}
          title="About Us"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.content}>
          <View style={styles.container}>
            <Text style={styles.textTitle}>What is MEter?</Text>
            <Text style={styles.textContent}>
              {
                'In hac habitasse platea dictumst. Mauris placerat, augue in facilisis pellentesque, augue sapien pulvinar neque, sit amet vulputate nulla tellus eu enim. Sed molestie dolor ac ligula elementum, vitae commodo massa imperdiet. Aenean vitae elit in ipsum auctor interdum. Duis iaculis, velit ac interdum dignissim, nibh justo sagittis neque, nec sollicitudin urna lacus vel libero. Nullam sagittis nisl id velit hendrerit eleifend. Duis in lorem sollicitudin, dictum risus nec, tempus ipsum. Vestibulum quis libero augue. Curabitur in lacinia diam. Donec lorem ex, convallis eget ex non, maximus convallis augue.'
              }
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.textTitle}>Our Missions</Text>
            <Text style={styles.textContent}>
              {
                'Proin ornare enim tincidunt lacinia interdum. Quisque interdum eleifend mattis. Fusce facilisis massa a ornare consectetur. Aenean feugiat eros vel est sollicitudin, id auctor lorem elementum. Etiam aliquet, est eget convallis placerat, nisi dolor elementum nulla, et bibendum quam purus sed metus.'
              }
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.textTitle}>Our Goals</Text>
            <Text style={styles.textContent}>
              {
                'Curabitur nec pharetra diam. Integer sed commodo risus. Proin vitae sodales ipsum. Suspendisse euismod ornare odio, eu efficitur arcu euismod tincidunt. Fusce ultricies nisl at ante pretium, ut aliquam tortor ullamcorper. Vestibulum ornare magna et vulputate aliquam. Sed eget dapibus diam.'
              }
            </Text>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  aboutScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 20,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  container: {
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  textContent: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
    fontWeight: 'normal',
  },
});
