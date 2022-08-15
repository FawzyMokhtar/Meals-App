import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import MealDetails from '../components/MealDetails';
import MealIngredients from '../components/MealIngredients';
import MealSteps from '../components/MealSteps';
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((item) => item.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [meal, navigation]);

  return (
    <ScrollView style={styles.screen} bounces={false}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetails meal={meal} textStyle={{ color: 'white' }} />
        <MealIngredients ingredients={meal.ingredients} />
        <MealSteps steps={meal.steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    color: 'white',
  },
});