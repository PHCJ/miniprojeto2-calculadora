import { Text, View, StyleSheet } from 'react-native';

export default function Display({value="0", tFont = 50, tFlex = 1}) {
  return (
    <View style={styles(tFlex).container}>
      <Text style={styles(tFont).content}>{(String(value))}</Text>
    </View>
  )
}

const styles =(tFont,tFlex)=> StyleSheet.create({
  container: {
    flex: tFlex,
    backgroundColor: "#ccc",
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal:20,
  },
  content: {
    fontSize: tFont,
    padding: 10,
  },
});