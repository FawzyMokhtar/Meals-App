import { StyleSheet, FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(category) {
  return <CategoryGridTile category={category} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
