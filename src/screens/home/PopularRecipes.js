import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../utils/ColorUtils';

const recipes = [
  {
    id: 1,
    image: require('../../asserts/recipe-1.png'),
    star: 5,
    time: '5',
    title: 'Avocado Toast',
  },
  {
    id: 2,
    image: require('../../asserts/recipe-2.png'),
    star: 5,
    time: '5',
    title: 'Fruit Toast',
  },
];

export default PopularRecipes = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Most popular</Text>
        <Text style={styles.subHeading}>View All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {recipes.map((recipe) => (
          <Recipe data={recipe} />
        ))}
      </ScrollView>
    </View>
  );
};

const Recipe = ({data}) => {
  console.log(data, Array(data.star));
  return (
    <View style={styles.recipeItem}>
      <Image
        style={styles.recipeImage}
        source={data.image}
        resizeMode="cover"
      />
      <Text style={styles.recipeName}>{data.title}</Text>
      <View style={styles.startContainer}>
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
        <Text>{data.time} minus</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  heading: {
    fontSize: 18,
  },
  subHeading: {
    fontSize: 14,
    color: Colors.subText2,
  },
  recipeItem: {
    width: 210,
    marginRight: 20,
    borderRadius: 20,
    borderColor: Colors.subText2,
    borderWidth: 1,
  },
  recipeImage: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  icon: {
    width: 15,
    height: 15,
    marginEnd: 5,
  },
  recipeName: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  startContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  timerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
});
