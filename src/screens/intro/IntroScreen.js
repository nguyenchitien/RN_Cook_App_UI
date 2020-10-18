import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../utils/ColorUtils';

export default IntroScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.images}>
          <Image source={require('../../asserts/intro.png')} />
        </View>
        <View style={styles.textIndicators}>
          <Text style={styles.heading}>
            The art of Cooking. Make your life easier.
          </Text>
          <View style={styles.indicatorsConatainer}>
            <View style={styles.indicatorItem}></View>
            <View style={styles.indicatorItem}></View>
            <View style={styles.indicatorItem}></View>
            <View
              style={[styles.indicatorItem, styles.indicatorItemActive]}></View>
          </View>
        </View>
        <View style={styles.viewDetail}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.borderContainer}>
              <View style={styles.wrapperInner}>
                <Image source={require('../../asserts/arrow-right.png')} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  images: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIndicators: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: 30,
    paddingHorizontal: 20,
    textAlign: 'center',
    lineHeight: 40,
  },
  indicatorsConatainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicatorItem: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    borderRadius: 3,
    backgroundColor: Colors.green100,
  },
  indicatorItemActive: {
    backgroundColor: Colors.green200,
    width: 15,
  },
  viewDetail: {
    flex: 1,
    justifyContent: 'center',
  },
  borderContainer: {
    borderWidth: 2,
    borderColor: Colors.green100,
    padding: 10,
    borderRadius: 60,
  },
  wrapperInner: {
    backgroundColor: Colors.green100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
