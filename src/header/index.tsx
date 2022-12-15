import { View, Text } from "react-native";

import { styles } from "./style";

export default function Header() {
  return (
    <View style={styles.headerBox}>
      <Text style={styles.headerText}>Calculadora de IMC</Text>
    </View>
  )
}