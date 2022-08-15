import { StyleSheet, Text, View } from 'react-native';

function MealSteps({ steps }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Steps</Text>
      </View>
      {steps.map((step) => (
        <View key={step} style={styles.textContainer}>
          <Text style={styles.text}>{step}</Text>
        </View>
      ))}
    </View>
  );
}

export default MealSteps;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 6,
  },
  titleContainer: {
    padding: 6,
    margin: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#e2b497',
  },
  textContainer: {
    width: '80%',
    backgroundColor: '#e2b497',
    borderRadius: 6,
    padding: 6,
    margin: 4,
  },
  text: {
    verticalHorizontal: 4,
    fontSize: 16,
    textAlign: 'center',
    color: '#351401',
  },
});
