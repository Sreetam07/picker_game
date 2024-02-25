import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";

export default function Login({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.reducer.auth.isAuthenticated
  );
  // const loginError = useSelector(state => state.reducer.authReducer.loginError);

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  const handleNavigateToGame = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your UserName"
          value={username.toLowerCase()}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          value={password.toLowerCase()}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={handleLogin}
          style={styles.buttonContainer}
        />
      </View>
      {/* {loginError && <Text style={styles.errorText}>{loginError}</Text>} */}
      {isAuthenticated && handleNavigateToGame()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "25%",
    backgroundColor: "blue",
  },
});
