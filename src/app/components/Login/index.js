import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { gray, transparent } from "../../../resources/colors";
import {
  str006,
  str014,
  str079,
  str080,
  str081,
  str082,
} from "../../../resources/strings";
import { styles } from "../../../styles";
import { useDispatch } from "react-redux";
import { loginUser } from "../Utils";
import Loading from "../Loading";

export default Login = () => {
  const [email, setEmail] = useState(str006);
  const [password, setPassword] = useState(str006);
  const [loading, setLoading] = useState(false);
  const handleEmailInput = (t) => setEmail(t);
  const handlePasswordInput = (t) => setPassword(t);
  const dispatch = useDispatch();
  const handleLogin = () => {
    loginUser(email, setEmail, password, setPassword, dispatch, setLoading);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, styles.extraMarginVertical]}>
        {str079}
      </Text>
      <TextInput
        style={styles.listEntry}
        placeholder={str080}
        placeholderTextColor={gray}
        onChangeText={handleEmailInput}
        value={email}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
      />
      <TextInput
        style={styles.listEntry}
        placeholder={str081}
        placeholderTextColor={gray}
        onChangeText={handlePasswordInput}
        value={password}
        underlineColorAndroid={transparent}
        autoCapitalize={str014}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{str082}</Text>
      </TouchableOpacity>
    </View>
  );
};
