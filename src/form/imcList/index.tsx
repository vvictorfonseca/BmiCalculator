import { Text, View } from "react-native";

import { styles } from "./style"

interface IPros {
  value: number
}

export default function ImcList({ value }: IPros) {
  return (
    <View style={styles.imcListBox}>
      <Text style={styles.imcListText}>Resultado IMC = {value}</Text>
    </View>
  )
}