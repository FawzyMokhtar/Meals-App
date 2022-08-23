import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealsList from '../components/meals/meals-list';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoriteMealsScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = favoriteMealsCtx.data;
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
