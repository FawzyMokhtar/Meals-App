import { StyleSheet, Text, View } from 'react-native';

function MealDetails({ meal, textStyle }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.duration} (minutes)
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
