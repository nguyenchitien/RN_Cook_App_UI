import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../utils/ColorUtils';

const recipes = [
  {
    id: 1,
    image: require('../../asserts/recipe-3.png'),
    star: 5,
    time: '45',
    title: 'Fish with couscous',
    ingredients: 6,
    isFavorite: true,
  },
  {
    id: 2,
    image: require('../../asserts/recipe-4.png'),
    star: 5,
    time: '50',
    title: 'Ramen',
    ingredients: 7,
    isFavorite: false,
  },
];

export default Recipes = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <View style={styles.tabIcon}>
          <Text>All recipes</Text>
          <View style={styles.tabActive}></View>
        </View>
        <View style={styles.tabIcon}>
          <Text>Meat</Text>
        </View>
        <View style={styles.tabIcon}>
          <Text>Salads</Text>
        </View>
        <View style={styles.tabIcon}>
          <Text>Soups</Text>
        </View>
      </View>
      <View>
        <ScrollView>
          {recipes.map((recipe) => (
            <RecipeItem data={recipe} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const RecipeItem = ({data}) => {
  return (
    <View style={styles.recipeItem}>
      <Image source={data.image} />
      <View style={styles.recipeDetail}>
        <Text>{data.title}</Text>
        <View style={styles.starContainer}>
          {Array.from(Array(data.star).keys()).map((_) => (
            <Image
              style={styles.icon}
              source={require('../../asserts/star-active.png')}
            />
          ))}
        </View>
        <View style={styles.timerContainer}>
          <Image
            style={styles.icon}
            source={require('../../asserts/timer.png')}
          />
          <Text style={{color: Colors.subText2}}>{data.time} minus</Text>
        </View>
      </View>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={
          data.isFavorite
            ? require('../../asserts/heart-active.png')
            : require('../../asserts/heart.png')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabIcon: {
    flex: 1,
    alignItems: 'center',
  },
  tabActive: {
    alignSelf: 'center',
    backgroundColor: Colors.green200,
    width: '50%',
    marginTop: 10,
    height: 2,
  },
  recipeItem: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
    marginEnd: 10,
  },
  recipeDetail: {
    // width: '70%',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
