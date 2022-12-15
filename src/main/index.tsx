import { View, Pressable, Keyboard } from "react-native"

import { styles } from "./style"

import Form from "../form"

export default function Main() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.mainBox}>
      <Form />
    </Pressable>
  )
}