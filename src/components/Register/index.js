import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { gray, transparent } from "../../resources/colors";
import { str006, str014 } from "../../resources/strings";
import { styles } from "../../styles";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../Utils";

export default Register = () => {
  const [username, setUsername] = useState(str006);
  const [email, setEmail] = useState(str006);
  const [password, setPassword] = useState(str006);
  const [confirmPassword, setConfirmPassword] = useState(str006);
  const dispatch = useDispatch();
  const handleUserNameInput = (text) => setUsername(text);
  const handleEmailInput = (text) => setEmail(text);
  const handlePasswordInput = (text) => setPassword(text);
  const handleConfirmPasswordInput = (text) => setConfirmPassword(text);
  const handleRegister = () =>
    registerNewUser(
      username,
      setUsername,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      dispatch
    );

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
