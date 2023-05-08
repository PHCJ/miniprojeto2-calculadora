import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import Botao from '../Components/Botao';
import Display from '../Components/Display';

const Trigonometria = () => {
  const [display, setDisplay] = useState("0");

  const btnClean = () => {
    setDisplay("0");
  };

  const btnBackSpace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Display value={display} />
      <View style={styles.contentBoxButton}>
        <View View style={styles.numBoxButton}>

          <Botao key={"C"} onPress={btnClean}
            tamanhoW={50}
            tamanhoH={40}
            tFonte={25}
            cor="#2aa52a"
          >
            {"C"}
          </Botao>
          <Botao cor="#0d59e7" tamanhoW={50} tamanhoH={40} tFonte={25} onPress={() => btnBackSpace()}>
            {"<-"}
          </Botao>
          
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ff0'
  },
  contentBoxButton: {
    flex: 0.33,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor:"#fff"
  },
  numBoxButton: {
    width: "60%",
    flexDirection: "row",
    flexWrap: "wrap-reverse",
  },
  operationBoxButton: {
    alignItems: 'flex-end',
  },
})

export default Trigonometria