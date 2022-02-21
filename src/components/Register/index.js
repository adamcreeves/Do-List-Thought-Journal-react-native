import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { gray, transparent } from "../../resources/colors";
import { str006, str014 } from "../../resources/strings";
import { styles } from "../../styles";
import { auth } from "../../firebase/config";

export default Register = () => {
  const [username, setUsername] = useState(str006);
  const [email, setEmail] = useState(str006);
  const [password, setPassword] = useState(str006);
  const [confirmPassword, setConfirmPassword] = useState(str006);
  const handleUserNameInput = (text) => setUsername(text);
  const handleEmailInput = (text) => setEmail(text);
  const handlePasswordInput = (text) => setPassword(text);
  const handleConfirmPasswordInput = (text) => setConfirmPassword(text);
  const handleRegister = () => {
    if (username === str006) {
      alert("You need to enter a username");
    } else if (username.length < 6) {
      alert("Your username must be 6 character or more");
    } else if (email === str006) {
      alert("You need to enter your email");
    } else if (password.length < 8) {
      alert("Your password needs to be 8 characters or more");
    } else if (password !== confirmPassword) {
      alert("Your passwords don't match");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(
            `This is the user: ${user} and userCredential: ${userCredential}`
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error: ${errorCode} - ${errorMessage}`);
        });
      setUsername(str006);
      setEmail(str006);
      setPassword(str006);
      setConfirmPassword(str006);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, styles.extraMarginVertical]}>
        {"Register"}
      </Text>
      <TextInput
        style={styles.listEntry}
        placeholder={"Username"}
        placeholderTextColor={gray}
        onChangeText={handleUserNameInput}
        value={username}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
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
      <TextInput
        style={styles.listEntry}
        placeholder={"Confirm Password"}
        placeholderTextColor={gray}
        onChangeText={handleConfirmPasswordInput}
        value={confirmPassword}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create User</Text>
      </TouchableOpacity>
    </View>
  );
};