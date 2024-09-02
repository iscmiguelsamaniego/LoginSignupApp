import { Image, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import styles from "../styles/WelcomeStyles"; // Import the refactored styles
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
      <View style={styles.buttonsInRowContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={handleSignup}>
            <Text style={styles.registerText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.continueText}>ó</Text>
      <TouchableOpacity style={styles.googleButtonContainer}>
        <Image
          source={require("../images/google.png")}
          style={styles.googleImage}
        />
        <Text style={styles.googleText}>Continuar con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
