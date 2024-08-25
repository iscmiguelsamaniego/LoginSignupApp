import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ImageBackground
      source={require("../images/background.png")} // Your background image path
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Image
          source={require("../images/arrow_back.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Hola de nuevo</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../images/email.png")}
            style={{ width: 25, height: 25,}}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu email"
            placeholderTextColor={colors.white}
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
            placeholderTextColor={colors.white}
            secureTextEntry={secureEntery}
          />
          <Image
            source={require("../images/eye.png")}
            style={{ width: 25, height: 25 }}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery((prev) => !prev);
            }}
          >
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButtonWrapper}>
        <Text style={styles.loginText}>E n t r a r</Text>
      </TouchableOpacity>
      <Text style={styles.continueText}>o</Text>
      <TouchableOpacity style={styles.googleButtonContainer}>
        <Image
          source={require("../images/google.png")}
          style={styles.googleImage}
        />
        <Text style={styles.googleText}>Continuar con Google</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.white,
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
    color: colors.white,
    fontFamily: fonts.SemiBold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 15,
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
    marginVertical: 10,
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
    color: colors.white,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.white,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.blue,
    fontFamily: fonts.Bold,
  },
});
