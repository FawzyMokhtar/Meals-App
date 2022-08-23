import { StyleSheet, View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import MealsList from '../components/meals/meals-list';
import { MEALS } from '../data/dummy-data';

function FavoriteMealsScreen() {
  const favoriteMealIds = useSelector((state) => state.favorites.data);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.noItemsContainer}>
        <Text style={styles.noItemsText}>
          You have no favorite meals yet..!
        </Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
}

export default FavoriteMealsScreen;

const styles = StyleSheet.create({
  noItemsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
