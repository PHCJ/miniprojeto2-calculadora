import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Botao from '../Components/Botao';
import Display from '../Components/Display';

export default function Conversao() {

  const [display, setDisplay] = useState('dec');
  const [displaya, setDisplaya] = useState("0");
  const [displayb, setDisplayb] = useState("0");
  const [displayc, setDisplayc] = useState("0");
  const [displayd, setDisplayd] = useState("0");

  const btnClean = () => {
    setDisplay("dec")
    setDisplaya("0");
    setDisplayb("0");
    setDisplayc("0");
    setDisplayd("0");
  };

  const btnBackSpace = () => {
    setDisplaya(displaya.slice(0, -1));
  };

  function decimalTo(valor) {
    valor = parseFloat(valor)
    setDisplayb((valor >>> 0).toString(8))
    setDisplayc((valor >>> 0).toString(16))
    setDisplayd((valor >>> 0).toString(2))
  }

  function numberEvent(num) {
    switch (display) {
      case 'dec':
        if(displaya === "0"){
          setDisplaya(num);
        }else
          setDisplaya(`${displaya}${num}`)
        decimalTo(displaya)
        break
      case 'oct':
        return setDisplayb(display)
      case 'hex':
        return setDisplayc(display)
      case 'bin':
        return setDisplayd(display)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentBoxDisplay}>
        <Text style={styles.titleDisplay}>Decimal</Text>
        <TouchableOpacity style={styles.selectDisplay} onPress={() => setDisplay("dec")} >
          <Display value={displaya} tFont={15} />
        </TouchableOpacity>
        <Text style={styles.titleDisplay}>Octal</Text>
        <TouchableOpacity style={styles.selectDisplay} onPress={() => setDisplay("oct")} >
          <Display value={displayb} tFont={15} />
        </TouchableOpacity>
        <Text style={styles.titleDisplay}>Hexadecimal</Text>
        <TouchableOpacity style={styles.selectDisplay} onPress={() => setDisplay("hex")} >
          <Display value={displayc} tFont={15} />
        </TouchableOpacity>
        <Text style={styles.titleDisplay}>Binário</Text>
        <TouchableOpacity style={styles.selectDisplay} onPress={() => setDisplay("bin")} >
          <Display value={displayd} tFont={15} />
        </TouchableOpacity>

      </View>

      <View style={styles.contentBoxButton}>
        <View View style={styles.numBoxButton}>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("7")}>{7}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("8")}>{8}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("9")}>{9}</Botao>
        </View>

        <View View style={styles.numBoxButton}>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("4")}>{4}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("5")}>{5}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("6")}>{6}</Botao>
        </View>

        <View View style={styles.numBoxButton}>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("1")}>{1}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("2")}>{2}</Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("3")}>{3}</Botao>
        </View>
        <View View style={styles.numBoxButton}>
          <Botao key={"C"} onPress={btnClean}
            tamanhoW={60}
            cor="#0d59e7"
          >
            {"C"}
          </Botao>
          <Botao cor='#5e136d' tamanhoW={60} onPress={() => numberEvent("0")}>{0}</Botao>
          <Botao cor="#0d59e7" tamanhoW={60} onPress={() => btnBackSpace()}>
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
  contentBoxDisplay: {
    flex: 0.5,
  },
  selectDisplay: {

  },
  titleDisplay: {
    fontSize: 20,
    marginLeft: 20,
  },
  contentBoxButton: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  numBoxButton: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
  },
  operationBoxButton: {
    alignItems: 'flex-end',
  },
})