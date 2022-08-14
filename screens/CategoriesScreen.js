import { StyleSheet, FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(category) {
    function pressHandler() {
      navigation.navigate('MealsOverview', { categoryId: category.id });
    }

    return <CategoryGridTile category={category} onPress={pressHandler} />;
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
