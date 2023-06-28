import {
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

function SurveyHistory({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.surveyScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/survey-background.jpg')}
          title="Survey History"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Your Survey History</Text>
          <View style={styles.cardHistoryContainer}>
            <View style={styles.historySubtitle}>
              <Text style={styles.textHistoryItem}>Date</Text>
              <Text style={styles.textHistoryItem}>Result</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Good Condition</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Unwell Condition</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Unwell Condition</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Good Condition</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Good Condition</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.textHistoryItem}>03/01/2023</Text>
              <Text style={styles.textHistoryItem}>Unwell Condition</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.textViewMore}>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default SurveyHistory;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  surveyScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 10,
  },
  content: {
    padding: 20,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
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
  textViewMore: {
    fontSize: 14,
    color: '#448AF7',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});
