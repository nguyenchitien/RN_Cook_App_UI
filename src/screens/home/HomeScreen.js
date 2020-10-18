import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import {Colors} from '../../utils/ColorUtils';
import PopularRecipes from './PopularRecipes';
import Recipies from './Recipies';

export default HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>What would you like to cook?</Text>
        <View style={styles.searchContainer}>
          <Image
            style={styles.icon}
            source={require('../../asserts/search.png')}
          />
          <TextInput style={styles.searchInput} placeholder="Find a recipe" />
          <View style={styles.adjust}>
            <Image
              style={styles.icon}
              source={require('../../asserts/adjust-horizontal.png')}
            />
          </View>
        </View>
        <PopularRecipes />
        <Recipies />
      </View>
      <View style={styles.bottomTabs}>
        <View style={styles.bottomTabItem}>
          <Image source={require('../../asserts/tab-icon-1.png')} />
          <View style={styles.tabAtive}></View>
        </View>
        <View style={styles.bottomTabItem}>
          <Image source={require('../../asserts/tab-icon-2.png')} />
          <View
            style={[styles.tabAtive, {backgroundColor: 'transparent'}]}></View>
        </View>
        <View style={styles.bottomTabItem}>
          <Image source={require('../../asserts/tab-icon-3.png')} />
          <View
            style={[styles.tabAtive, {backgroundColor: 'transparent'}]}></View>
        </View>
        <View style={styles.bottomTabItem}>
          <Image source={require('../../asserts/tab-icon-4.png')} />
          <View
            style={[styles.tabAtive, {backgroundColor: 'transparent'}]}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  heading: {
    fontSize: 30,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    backgroundColor: Colors.subText3,
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 15,
    height: 15,
    margin: 15,
  },
  searchInput: {
    alignSelf: 'stretch',
    flex: 1,
  },
  adjust: {
    width: 45,
    backgroundColor: Colors.green200,
    borderRadius: 10,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.subText2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomTabItem: {
    flex: 1,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabAtive: {
    width: 6,
    height: 6,
    marginTop: 10,
    borderRadius: 3,
    backgroundColor: Colors.green200,
  },
});
