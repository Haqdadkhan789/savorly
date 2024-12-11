import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

const Loginscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View style={styles.inputfield}>
        <TextInput placeholder="E-mail" style={styles.input} placeholderTextColor="gray" />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="gray"
          secureTextEntry={true} // Hides the password
        />
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.loginbtn}>
          <Text style={styles.logintxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputfield: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    width: 250,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
    fontSize: 16,
    color: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginbtn: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logintxt: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
