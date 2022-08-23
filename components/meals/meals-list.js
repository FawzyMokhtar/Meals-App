import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

function MealsList({ meals }) {
  const navigation = useNavigation();

  function renderMealItem(meal) {
    function pressHandler() {
      navigation.navigate('MealDetails', { mealId: meal.id });
    }

    return <MealItem meal={meal} onPress={pressHandler} />;
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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
