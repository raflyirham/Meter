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

function AccountSetting({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.accountScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/account-background.jpg')}
          title="Account Setting"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.content}>
          <Text style={styles.textTitle}>Account Setting</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.cardItem}>
                <View style={styles.cardInfo}>
                  <Image
                    style={styles.imgItem}
                    source={require('../../../assets/img/account.png')}
                  />
                  <Text style={styles.textItem}>Change Profile Picture</Text>
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
                    source={require('../../../assets/img/icon-account-background.png')}
                  />
                  <Text style={styles.textItem}>Change Profile Background</Text>
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
                    source={require('../../../assets/img/icon-account-password.png')}
                  />
                  <Text style={styles.textItem}>Change Password</Text>
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
                    source={require('../../../assets/img/icon-account-delete.png')}
                  />
                  <Text style={styles.textItem}>Delete Account</Text>
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
                    source={require('../../../assets/img/icon-account-logout.png')}
                  />
                  <Text style={styles.textItem}>Log Out</Text>
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

export default AccountSetting;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  accountScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 10,
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
