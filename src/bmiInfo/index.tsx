import { Text, View } from "react-native";
import { styles } from "./style";

interface IPropsBmiInfo {
  value: number
}

export default function BmiInfo(props: IPropsBmiInfo) {
  return (
    <View style={styles.bmiInfoBox}>
      <Text style={styles.bmiInfoText}>Seu IMC é de {props.value.toFixed(1)} Kg/m² </Text>
    </View>
  )
}