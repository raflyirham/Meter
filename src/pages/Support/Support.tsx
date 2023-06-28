import {
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

function Support({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.supportScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/support-background.jpg')}
          title="Support"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.contentContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              navigation.navigate('SupportChat', {currentMenu: 'Support'})
            }>
            <View style={styles.cardChatContainer}>
              <Text style={styles.textChatTitle}>
                {'Feeling Unwell?\nChat with Our Support Care'}
              </Text>
              <View style={styles.btnChat}>
                <Text style={styles.textChat}>Start Chat</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.historyContainer}>
            <Text style={styles.textHistoryTitle}>Support Care History</Text>
            <View style={styles.cardHistoryContainer}>
              <View style={styles.historySubtitle}>
                <Text style={styles.textHistoryItem}>Date</Text>
                <Text style={styles.textHistoryItem}>Agent Name</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.textHistoryItem}>03/01/2023</Text>
                <Text style={styles.textHistoryItem}>Lorem</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.textHistoryItem}>03/01/2023</Text>
                <Text style={styles.textHistoryItem}>Lorem</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.textHistoryItem}>03/01/2023</Text>
                <Text style={styles.textHistoryItem}>Lorem</Text>
              </View>
              <View style={styles.historyItem}>
                <Text style={styles.textHistoryItem}>03/01/2023</Text>
                <Text style={styles.textHistoryItem}>Lorem</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default Support;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  supportScreen: {
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
  cardChatContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 120,
    backgroundColor: '#FF6666',
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
  textChatTitle: {
    fontSize: 24,
    color: '#FFEADD',
    fontWeight: 'bold',
    lineHeight: 33,
  },
  btnChat: {
    padding: 10,
    backgroundColor: '#FFEADD',
    maxWidth: '50%',
    marginTop: 20,
  },
  textChat: {
    fontSize: 18,
    color: '#FF6666',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  textHistoryTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  cardHistoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  historySubtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  historyItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
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
  textHistoryItem: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});
