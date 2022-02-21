import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { gray, transparent } from "../../resources/colors";
import { str006, str014 } from "../../resources/strings";
import { styles } from "../../styles";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../redux/ActionTypes";

export default Login = () => {
  const [email, setEmail] = useState(str006);
  const [password, setPassword] = useState(str006);
  const handleEmailInput = (text) => setEmail(text);
  const handlePasswordInput = (text) => setPassword(text);
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (email === str006) {
      alert("You need to enter your email");
    } else if (password === str006) {
      alert("You need to enter your password");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: LOGIN, payload: user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}: ${errorMessage}`);
        });
      setEmail(str006);
      setPassword(str006);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, styles.extraMarginVertical]}>
        {"Login"}
      </Text>
      <TextInput
        style={styles.listEntry}
        placeholder={"Email"}
        placeholderTextColor={gray}
        onChangeText={handleEmailInput}
        value={email}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={"Password"}
        placeholderTextColor={gray}
        onChangeText={handlePasswordInput}
        value={password}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
