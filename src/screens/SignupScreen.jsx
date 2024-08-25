import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from 'react';
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
      <Image
          source={require("../images/arrow_back.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Comencemos</Text>        
      </View>
      {/* form  */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <Image
            source={require("../images/email.png")}
            style={{ width: 25, height: 25 }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require("../images/lock.png")}
            style={{ width: 25, height: 25 }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery((prev) => !prev);
            }}
          >
            <Image
            source={require("../images/eye.png")}
            style={{ width: 25, height: 25 }}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <Image
            source={require("../images/smartphone.png")}
            style={{ width: 25, height: 25 }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu numero de telefono"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>R e g i s t r a r m e</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require("../images/google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Registrarme con Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>¡Ya tengo una cuenta!</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>E n t r a r</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 10,
  },
  headingText: {
    fontSize: 32,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleButtonContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.blue,
    fontFamily: fonts.Bold,
  },
});