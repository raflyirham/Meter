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

function Health({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.healthScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/health-background.jpg')}
          title="Health Information"
        />
        <BackButton route={route} navigation={navigation} />
        <View style={styles.cardOuterContainer}>
          <View style={styles.cardTitleOuterContainer}>
            <View style={styles.cardTitleContainer}>
              <Image
                source={require('../../../assets/img/icon-sleepingpattern.png')}
              />
              <Text style={styles.textCardTitle}>Sleeping Pattern</Text>
            </View>
          </View>
          <View style={styles.cardContainerOne}></View>
          <View style={styles.cardContainerTwo}>
            <View style={styles.cardItemOuterContainer}>
              <View style={styles.cardItemContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>5h 54m</Text>
                  <Text style={styles.itemTitle}>Today's Sleeping Time</Text>
                </View>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>12m 5s</Text>
                  <Text style={styles.itemTitle}>Time Before Sleep</Text>
                </View>
              </View>
              <View style={styles.cardItemContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>5h 54m</Text>
                  <Text style={styles.itemTitle}>Today's Sleeping Time</Text>
                </View>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>12m 5s</Text>
                  <Text style={styles.itemTitle}>Time Before Sleep</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.cardOuterContainer}>
          <View style={styles.cardTitleOuterContainerDiet}>
            <View style={styles.cardTitleContainer}>
              <Image source={require('../../../assets/img/icon-diet.png')} />
              <Text style={styles.textCardTitleDiet}>Diet</Text>
            </View>
          </View>
          <View style={styles.cardContainerOneDiet}></View>
          <View style={styles.cardContainerTwoDiet}>
            <View style={styles.cardItemOuterContainer}>
              <View style={styles.cardItemContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>5h 54m</Text>
                  <Text style={styles.itemTitleDiet}>
                    Today's Sleeping Time
                  </Text>
                </View>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>12m 5s</Text>
                  <Text style={styles.itemTitleDiet}>Time Before Sleep</Text>
                </View>
              </View>
              <View style={styles.cardItemContainer}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>5h 54m</Text>
                  <Text style={styles.itemTitleDiet}>
                    Today's Sleeping Time
                  </Text>
                </View>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemDecsription}>12m 5s</Text>
                  <Text style={styles.itemTitleDiet}>Time Before Sleep</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default Health;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  healthScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 20,
  },
  cardOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  cardContainerOne: {
    backgroundColor: '#3E3D72',
    minHeight: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardContainerTwo: {
    backgroundColor: '#6C6B96',
    minHeight: 293,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  cardTitleOuterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 100,
    marginLeft: '27%',
    zIndex: 1,
  },
  cardTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCardTitle: {
    fontSize: 25,
    color: '#0B1D4D',
    fontWeight: 'bold',
  },
  cardItemOuterContainer: {
    marginTop: 80,
    padding: 25,
  },
  cardItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemDecsription: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '700',
  },
  itemTitle: {
    fontSize: 15,
    color: '#0B1D4D',
    fontWeight: '700',
  },
  cardContainerOneDiet: {
    backgroundColor: 'rgba(78, 139, 0, 0.22)',
    minHeight: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  cardContainerTwoDiet: {
    backgroundColor: '#777031',
    minHeight: 293,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textCardTitleDiet: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardTitleOuterContainerDiet: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 100,
    marginLeft: '34%',
    zIndex: 1,
  },
  itemTitleDiet: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
  },
});
