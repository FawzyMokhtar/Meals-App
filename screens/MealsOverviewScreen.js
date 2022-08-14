import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  function renderMealItem(meal) {
    return <MealItem meal={meal} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
