import { Text, View, StyleSheet } from 'react-native';

export default function Display({value="0"}) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{(String(value))}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: "#ccc",
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin:20,
  },
  content: {
    fontSize: 50,
    padding: 10,
  },
});