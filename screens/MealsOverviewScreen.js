import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

import MealsList from '../components/meals/meals-list';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    navigation.setOptions({ title: category.title });
  }, [categoryId, navigation]);

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return <MealsList meals={meals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
