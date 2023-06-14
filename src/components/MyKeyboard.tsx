import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<number | null>(null);

  const handleNumberpress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationsPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "%":
        clear();
        setResult(parseInt(secondNumber) % parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

//   const FirstNumberDisplay = () => {
//     if (result !== null) {
//       return (
//         <Text
//           style={
//             result < 99999
//               ? [Styles.screenFirstNumber, { color: myColors.result }]
//               : [
//                   Styles.screenFirstNumber,
//                   { fontSize: 50, color: myColors.result },
//                 ]
//           }
//         >
//           {result?.toString()}
//         </Text>
//       );
//     }
//     if (firstNumber && firstNumber.length < 6) {
//       return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
//     }
//     if (firstNumber === "") {
//       return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
//     }
//     if (firstNumber.length > 5 && firstNumber.length < 8) {
//       return (
//         <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
//           {firstNumber}
//         </Text>
//       );
//     }
//     if (firstNumber.length > 8) {
//       return (
//         <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
//           {firstNumber}
//         </Text>
//       );
//     }
//   };

  return (
    <View style={Styles.viewBottom}>
      {/* <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 20, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {FirstNumberDisplay()}
      </View> */}
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationsPress("+/-")}
        />
        <Button title="%" isGray onPress={() => handleOperationsPress("%")} />
        <Button title="/" isBlue onPress={() => handleOperationsPress("/")} />V
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberpress("7")} />
        <Button title="8" onPress={() => handleNumberpress("8")} />
        <Button title="9" onPress={() => handleNumberpress("9")} />
        <Button title="*" isBlue onPress={() => handleOperationsPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberpress("4")} />
        <Button title="5" onPress={() => handleNumberpress("5")} />
        <Button title="6" onPress={() => handleNumberpress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationsPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberpress("1")} />
        <Button title="2" onPress={() => handleNumberpress("2")} />
        <Button title="3" onPress={() => handleNumberpress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationsPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberpress(".")} />
        <Button title="0" onPress={() => handleNumberpress("0")} />
        <Button
          title="←"
          onPress={() => handleNumberpress(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
