import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {

  const navigation = useNavigation();
  
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../images/logo.png")} style={styles.logo} />
      <Image source={require("../images/man.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor.</Text>
      <Text style={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Registro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 15,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
});
