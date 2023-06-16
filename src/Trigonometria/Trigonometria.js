import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import Botao from '../Components/Botao';
import Display from '../Components/Display';

export default function Trigonometria() {

  const [display, setDisplay] = useState('0');

  const btnClean = () => {
    setDisplay("0")
  };

  const btnBackSpace = () => {
    setDisplay(display.slice(0, -1));
  };

  function validateAngle(angle) {
    if (isNaN(angle) || angle < -360 || angle > 360) {
      setDisplay("Ângulo inválido!")
    }
  }

  function toRadians(degrees) {
    var pi = Math.PI;
    return degrees * (pi/180);
  }

  function calculateSine(angle) {
    validateAngle(angle);

    const radians = toRadians(angle);
    return Math.sin(radians);
  }

  function calculateCosine(angle) {
    validateAngle(angle);

    const radians = toRadians(angle);
    return Math.cos(radians);
  }

  function calculateTangent(angle) {
    validateAngle(angle);

    const radians = toRadians(angle);

    if (angle % 90 === 0 && angle % 180 !== 0) {
      return Infinity;
    } else {
      return Math.tan(radians);
    }
  }

  function numberEvent(num) {
    if (display === "0") {
      setDisplay(num);
    } else
      setDisplay(`${display}${num}`)

    switch (display) {
      case 'sen':
        decimalTo(display)
        break
      case 'cos':
        return setDisplay(display)
      case 'tan':
        return setDisplay(display)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentBoxDisplay}>
        <Display value={display} />
      </View>

      <View style={styles.contentBoxButton}>
        <View View style={styles.numBoxButton}>
          <Botao cor='#136d61' tamanhoW={60} tFonte={27} onPress={() => {
            setDisplay(String((calculateSine(parseFloat(display)))))
            }}>{"Sen"}</Botao>
          <Botao cor='#136d61' tamanhoW={60} tFonte={27} onPress={() => {
            setDisplay(String((calculateCosine(parseFloat(display)))))
            }}>{"Cos"}</Botao>
          <Botao cor='#136d61' tamanhoW={60} tFonte={27} onPress={() => {
            setDisplay(String((calculateTangent(parseFloat(display)))))
            }}>{"Tag"}</Botao>
        </View>

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
    flex: 0.25,
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
})