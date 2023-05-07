import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, cor = "#000", tamanhoW = "auto", tamanhoH = "auto", tFonte = 30, children }) => {
  return (
    <TouchableOpacity style={styles(cor, tamanhoW, tamanhoH).button} onPress={onPress}>
      <Text style={styles(cor, tamanhoW, tamanhoH, tFonte).buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = (cor, tWidth, tHeight, tFonte) => StyleSheet.create({
  button: {
    margin: 8,
    borderRadius:50,
    backgroundColor: cor,
    width: tWidth,
    height: tHeight,
  },
  buttonText: {
    fontSize: tFonte,
    fontWeight: "bold",
    textAlign: "center",
    color:"#fff",
    padding: (tFonte > 29) ? 15 : 0,
  },
});

export default Button;
