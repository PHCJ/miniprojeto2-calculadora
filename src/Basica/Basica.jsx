import { View, StyleSheet } from "react-native";
import React, { useState } from 'react'
import Botao from '../Components/Botao';
import Display from '../Components/Display';

const Basica = () => {

  const [display, setDisplay] = useState("0");
  const [valor, setValor] = useState(null);
  const [operator, setOperator] = useState(null);

  const operationButtons = ["+", "-", "*", "/", "="];
  const numberButtons = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(i + 48)
  );

  const btnClean = () => {
    setDisplay("0");
    setValor(null);
    setOperator(null);
  };
  const btnBackSpace = () => {
    setDisplay(display.slice(0, -1));
  };

  const valueEvent = (number1) => {
    const number = String(number1)
    if (display == "0" && valor === null) {
      setDisplay(number);
      setValor(number);
    } else {
      setDisplay(`${display}${number}`);
    }
    if (operator != null) {
      if (valor != null)
        setValor(number)
      else
        setValor(`${valor}${number}`);
    }
  };



  const operatorEvent = (oprt) => {
    let valor1 = parseFloat(display);
    let valor2 = parseFloat(valor);
    let total = 0.0;
    if (operator === null) {
      setDisplay(`${display}${oprt}`);
      setOperator(oprt);
    } else if (oprt === "=") {
      total = calculateValue(valor1, valor2, operator);
      setDisplay(`${(String(valor1))} ${operator} ${(String(valor2))} = ${(String(total))}`);
    } else {
      total = calculateValue(valor1, valor2, operator);
      setDisplay(`${(String(total))}${oprt}`);
    }
  };

  const calculateValue = (value1, value2, operator) => {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return value2;
    }
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
          {numberButtons.map((element) => (
            <Botao
              key={element}
              onPress={() => {
                valueEvent(element);
              }}
              tamanhoW={50}
              tamanhoH={40}
              tFonte={29}
            >
              {element}
            </Botao>

          ))}
        </View>

        <View style={styles.operationBoxButton}>
          {operationButtons.map((element) => (
            <Botao
              key={element}
              onPress={() => {
                operatorEvent(element);
              }}
              cor={'#0367a1'}
              tamanhoW={50}
              tamanhoH={40}
              tFonte={29}
            >
              {element}
            </Botao>
          ))}
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

export default Basica 