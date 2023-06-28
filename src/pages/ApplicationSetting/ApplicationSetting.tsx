import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import BackButton from '../../components/BackButton/BackButton';
import FooterMenu from '../../components/FooterMenu/FooterMenu';

function ApplicationSetting({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.applicationScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/application-background.jpg')}
          title="Application Setting"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.content}>
          <Text style={styles.textTitle}>Application Setting</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/icon-application-1.png')}
                  />
                  <Text style={styles.textItem}>Activate Dark Mode</Text>
                </View>
                <Image
                  style={styles.imgArrow}
                  source={require('../../../assets/img/icon-setting-arrow.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/icon-application-2.png')}
                  />
                  <Text style={styles.textItem}>Delete History</Text>
                </View>
                <Image
                  style={styles.imgArrow}
                  source={require('../../../assets/img/icon-setting-arrow.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/icon-application-3.png')}
                  />
                  <Text style={styles.textItem}>Language Setting</Text>
                </View>
                <Image
                  style={styles.imgArrow}
                  source={require('../../../assets/img/icon-setting-arrow.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/icon-application-4.png')}
                  />
                  <Text style={styles.textItem}>Connect to Smartwatch</Text>
                </View>
                <Image
                  style={styles.imgArrow}
                  source={require('../../../assets/img/icon-setting-arrow.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/icon-application-5.png')}
                  />
                  <Text style={styles.textItem}>Notifiaction Setting</Text>
                </View>
                <Image
                  style={styles.imgArrow}
                  source={require('../../../assets/img/icon-setting-arrow.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default ApplicationSetting;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  applicationScreen: {
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
  textTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardItem: {
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
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgItem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  textItem: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginLeft: 20,
  },
  imgArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});
