import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import BackButton from '../../components/BackButton/BackButton';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

function Profile({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.profileScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/profile-background.png')}
          title="My Account"
        />

        <BackButton route={route} navigation={navigation} />

        <View style={styles.contentContainer}>
          <View style={styles.profileInfoContainer}>
            <Image source={require('../../../assets/img/icon-account.png')} />
            <Text style={styles.textProfileName}>Lorem Ipsum</Text>
          </View>
          <View style={styles.statusInfoContainer}>
            <Text style={styles.textContainerTitle}>Your Status</Text>
            <LinearGradient
              colors={['#1A3A8E', '#B2E2DF']}
              style={styles.cardStatusContainer}>
              <AnimatedCircularProgress
                size={120}
                width={15}
                fill={100}
                tintColor="#9DFF9D"
                backgroundColor="#5b5b5b"
                duration={1500}>
                {percent => <Text style={styles.textPercent}>{100}</Text>}
              </AnimatedCircularProgress>
              <Text style={styles.textStatus}>You Are Great</Text>
            </LinearGradient>
          </View>

          <View style={styles.settingContainer}>
            <Text style={styles.textContainerTitle}>
              Information and Setting
            </Text>
            <View style={styles.cardSettingContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('MentalHealthStatistics', {
                    currentMenu: 'Profile',
                  })
                }>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-1.png')}
                    />
                    <Text style={styles.textSettingItem}>
                      Mental Health Statistics
                    </Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('SurveyHistory', {
                    currentMenu: 'Profile',
                  })
                }>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-2.png')}
                    />
                    <Text style={styles.textSettingItem}>Survey History</Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-3.png')}
                    />
                    <Text style={styles.textSettingItem}>Rate Us</Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('AccountSetting', {
                    currentMenu: 'Profile',
                  })
                }>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-4.png')}
                    />
                    <Text style={styles.textSettingItem}>Account Setting</Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('ApplicationSetting', {
                    currentMenu: 'Profile',
                  })
                }>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-5.png')}
                    />
                    <Text style={styles.textSettingItem}>
                      Application Setting
                    </Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('AboutUs', {
                    currentMenu: 'Profile',
                  })
                }>
                <View style={styles.cardSettingItem}>
                  <View style={styles.cardSettingInfo}>
                    <Image
                      style={styles.imgSettingItem}
                      source={require('../../../assets/img/icon-setting-6.png')}
                    />
                    <Text style={styles.textSettingItem}>About Us</Text>
                  </View>
                  <Image
                    style={styles.imgSettingArrow}
                    source={require('../../../assets/img/icon-setting-arrow.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  profileScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 20,
  },
  contentContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textProfileName: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 20,
  },
  statusInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
  },
  textContainerTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  cardStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  textPercent: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  textStatus: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  settingContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
  },
  cardSettingContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  cardSettingItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 5,
    backgroundColor: 'rgba(68, 138, 247, 0.35)',
  },
  cardSettingInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgSettingItem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  imgSettingArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  textSettingItem: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginLeft: 20,
  },
});
