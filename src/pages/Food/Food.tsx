import {
  Image,
  ImageBackground,
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

function Food({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.foodScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/food-background.png')}
          title="Diet Information"
        />

        <BackButton route={route} navigation={navigation} />

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.textCardTitle}>Today's Diet</Text>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>Total Calories:</Text>
              <Text style={styles.textCardDescription}>2214 Cal</Text>
            </View>

            <Text style={styles.textCardSubtitle}>Meal</Text>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>Breakfast</Text>
              <Text style={styles.textCardDescription}>488 Cal</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>Lunch</Text>
              <Text style={styles.textCardDescription}>511 Cal</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>Dinner</Text>
              <Text style={styles.textCardDescription}>468 Cal</Text>
            </View>
            <View style={styles.cardAddItem}>
              <Text style={styles.textCardAddItem}>+ Add Meal</Text>
            </View>

            <Text style={styles.textCardSubtitle}>Snacks</Text>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>1st Snack</Text>
              <Text style={styles.textCardDescription}>380 Cal</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>2nd Snack</Text>
              <Text style={styles.textCardDescription}>387 Cal</Text>
            </View>
            <View style={styles.cardAddItem}>
              <Text style={styles.textCardAddItem}>+ Add Snack</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.textCardTitle}>History</Text>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>Yesterday</Text>
              <Text style={styles.textCardDescription}>2214 Cal</Text>
            </View>
            <View style={styles.cardItem}>
              <Text style={styles.textCardItem}>2 Days Ago</Text>
              <Text style={styles.textCardDescription}>2412 Cal</Text>
            </View>
            <View style={styles.cardMoreItem}>
              <Text style={styles.textCardMoreItem}>See More</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default Food;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  foodScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 20,
  },
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
  cardOuterContainer: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  textCardTitle: {
    fontSize: 24,
    color: '#0B1D4D',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  textCardItem: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  textCardDescription: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  textCardSubtitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardAddItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 5,
  },
  textCardAddItem: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '400',
  },
  cardMoreItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  textCardMoreItem: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '400',
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
    zIndex: 3,
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
