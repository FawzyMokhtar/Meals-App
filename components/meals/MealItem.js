import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import MealDetails from './MealDetails';

function MealItem({ meal, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? styles.pressed // For IOS pressed
            : null
        }
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    overflow: Platform.select({ android: 'hidden' }),
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
