import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainBox: {
    width: "100%",
    alignItems: 'center'
  },
  formBox: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    margin: "auto"
  },
  formText: {
    width: '95%',
    fontSize: 18,
    fontWeight: "500",
    margin: "auto"
  },
  formInput: {
    width: '95%',
    height: 40,
    backgroundColor: "#e7e4e4",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    margin: "auto",
    placeholderTextColor: "#5c5b5b"
  },
  formButton: {
    justifyContent: "center",
    alignItems: 'center',
    width: "70%",
    height: 45,
    marginTop: 40,
    backgroundColor: "#e03939",
    borderRadius: 25,
    margin: "auto",
  },
  formButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: "#fff"
  },
  formErrorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#e03939",
    marginTop: 5,
    margin: 'auto'
  },
  inputErrorText: {
    width: '95%',
    margin: 'auto',
    fontSize: 12,
    fontWeight: 'bold',
    color: "#e03939",
  },
  shareButton: {
    justifyContent: "center",
    alignItems: 'center',
    width: "30%",
    height: 35,
    marginTop: 10,
    backgroundColor: "#396ee0",
    borderRadius: 25,
    margin: "auto"
  },
  shareButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: "#fff"
  },
  flatListBox: {
    justifyContent: 'center',
    width: "100%",
    marginTop: 10,
    marginBottom: 25
  }
})