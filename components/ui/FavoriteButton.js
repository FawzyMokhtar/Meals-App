import { StyleSheet, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function FavoriteButton({ isFavorite, onPress }) {
  const iconName = isFavorite ? 'heart' : 'heart-outline';
  const iconColor = isFavorite ? 'red' : 'white';

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.container, styles.pressed] // For IOS pressed
          : styles.container
      }
      onPress={onPress}
    >
      <Ionicons name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
}

export default FavoriteButton;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});
