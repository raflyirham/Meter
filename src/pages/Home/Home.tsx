import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {FooterMenu} from '../../components/FooterMenu/FooterMenu';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

function Home({route, navigation}) {
  const {currentMenu} = route.params;

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.homeScreen}>
        <View style={styles.conditionContainer}>
          <View style={styles.conditionStatus}>
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
          </View>
          <View style={styles.textConditionContainer}>
            <Text style={styles.textCondition}>
              You're doing great today Maintain your sleep and don’t forget to
              eat
            </Text>
          </View>
        </View>

        <View style={styles.feelingContainer}>
          <Text style={styles.feelingTitle}>How are you feeling today?</Text>
          <View style={styles.feelingItemContainer}>
            <View style={styles.feelingItem}>
              <Image source={require('../../../assets/img/sad.png')} />
            </View>
            <View style={styles.feelingItem}>
              <Image source={require('../../../assets/img/unhappy.png')} />
            </View>
            <View style={styles.feelingItem}>
              <Image source={require('../../../assets/img/smile.png')} />
            </View>
            <View style={styles.feelingItem}>
              <Image source={require('../../../assets/img/love.png')} />
            </View>
            <View style={styles.feelingItem}>
              <Image source={require('../../../assets/img/happy.png')} />
            </View>
          </View>
        </View>

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.cardTitleContainer}>
              <Image
                style={styles.itemIcon}
                source={require('../../../assets/img/icon-drop.png')}
              />
              <Text style={styles.textCardTitle}>Your Last Drop</Text>
            </View>
            <Text style={styles.textCardContent}>24 Days</Text>
          </View>
        </View>

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.cardTitleContainer}>
              <Image
                style={styles.itemIcon}
                source={require('../../../assets/img/icon-sleep.png')}
              />
              <Text style={styles.textCardTitle}>Sleep Cycle</Text>
            </View>
            <Text style={styles.textCardContent}>Excellent</Text>
          </View>
        </View>

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.cardTitleContainer}>
              <Image
                style={styles.itemIcon}
                source={require('../../../assets/img/icon-eating.png')}
              />
              <Text style={styles.textCardTitle}>Eating</Text>
            </View>
            <Text style={styles.textCardContent}>Good</Text>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />

      {/* <View style={styles.menuContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.menuItem}>
            <Image
              source={require('../../../assets/img/icon-home-active.png')}
            />
            <Text style={styles.textMenuItem}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Food')}>
          <View style={styles.menuItem}>
            <Image source={require('../../../assets/img/icon-food.png')} />
            <Text style={styles.textMenuItem}>Food</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Health')}>
          <View style={styles.menuItem}>
            <Image source={require('../../../assets/img/icon-health.png')} />
            <Text style={styles.textMenuItem}>Health</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Support')}>
          <View style={styles.menuItem}>
            <Image source={require('../../../assets/img/icon-support.png')} />
            <Text style={styles.textMenuItem}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Profile')}>
          <View style={styles.menuItem}>
            <Image source={require('../../../assets/img/icon-profile.png')} />
            <Text style={styles.textMenuItem}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  homeScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 20,
  },
  conditionContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ABCDFF',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  conditionStatus: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStatus: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  textPercent: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  textConditionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textCondition: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  feelingContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  feelingTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  feelingItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  feelingItem: {
    padding: 8,
    backgroundColor: '#fff',
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
  cardOuterContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
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
  cardTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textCardTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  textCardContent: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
