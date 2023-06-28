import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import BackButton from '../../components/BackButton/BackButton';

import {BarChart} from 'react-native-gifted-charts';
import Svg, {Rect} from 'react-native-svg';

const MentalHealthStatistics = ({route, navigation}) => {
  const {currentMenu} = route.params;

  const barData = [
    {
      value: 80,
      label: 'M',
      frontColor: '#22A699',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>80</Text>
      ),
    },
    {
      value: 50,
      label: 'T',
      frontColor: '#B31312',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {
      value: 75,
      label: 'W',
      frontColor: '#22A699',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>75</Text>
      ),
    },
    {
      value: 35,
      label: 'T',
      frontColor: '#B31312',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>35</Text>
      ),
    },
    {
      value: 50,
      label: 'F',
      frontColor: '#B31312',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {
      value: 100,
      label: 'S',
      frontColor: '#22A699',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>100</Text>
      ),
    },
    {
      value: 88,
      label: 'S',
      frontColor: '#22A699',
      topLabelComponent: () => (
        <Text style={{color: '#000', fontSize: 18, marginBottom: 6}}>88</Text>
      ),
    },
  ];

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.statisticsScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/statistics-background.jpg')}
          title="Your Mental Health Statistics"
        />
        <BackButton route={route} navigation={navigation} />

        <View style={styles.content}>
          <View style={styles.barContainer}>
            <Text style={styles.textInfoTitle}>
              Your Weekly Mental Health Statistics
            </Text>
            <BarChart
              barWidth={30}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              maxValue={100}
            />
          </View>
          <View style={styles.legendContainer}>
            <Text style={styles.textInfoTitle}>Legends</Text>
            <View style={styles.legendItem}>
              <Svg height="25" width="25" viewBox="0 0 25 25">
                <Rect width="25" height="25" fill="#22A699" />
              </Svg>
              <Text style={styles.textLegendItem}>Good condition</Text>
            </View>
            <View style={styles.legendItem}>
              <Svg height="25" width="25" viewBox="0 0 25 25">
                <Rect width="25" height="25" fill="#B31312" />
              </Svg>
              <Text style={styles.textLegendItem}>Unwell condition</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <FooterMenu menu={currentMenu} />
    </View>
  );
};

export default MentalHealthStatistics;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  statisticsScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    paddingBottom: 10,
  },
  content: {
    padding: 20,
  },
  barContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  textInfoTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  legendContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  legendItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textLegendItem: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
    marginLeft: 10,
  },
});
