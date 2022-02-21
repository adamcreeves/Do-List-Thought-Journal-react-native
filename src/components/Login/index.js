import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { gray, transparent } from "../../resources/colors";
import { str006, str014 } from "../../resources/strings";
import { styles } from "../../styles";
import { useDispatch } from "react-redux";
import { loginUser } from "../Utils";

export default Login = () => {
  const [email, setEmail] = useState(str006);
  const [password, setPassword] = useState(str006);
  const handleEmailInput = (text) => setEmail(text);
  const handlePasswordInput = (text) => setPassword(text);
  const dispatch = useDispatch();
  const handleLogin = () =>
    loginUser(email, setEmail, password, setPassword, dispatch);

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
