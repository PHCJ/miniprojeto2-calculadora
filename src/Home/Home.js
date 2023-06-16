import { StyleSheet, Text, View } from 'react-native'
import Botao from '../Components/Botao'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MINIPROJETO 2</Text>
      <Botao onPress={() => navigation.navigate('Basica')} cor={"#63000dfc"}>
        {"Básica"}
      </Botao>
      <Botao onPress={() => { navigation.navigate('Conversao') }} cor={"#63000dfc"}>
        {"Conversão"}
      </Botao>
      <Botao onPress={() => { navigation.navigate('Trigonometria') }} cor={"#63000dfc"}>
        {"Trigonometria"}
      </Botao>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    position: 'absolute',
    top: 100,
    color: '#0044ff',
    fontWeight: 'bold',
  },
})

export default Home;