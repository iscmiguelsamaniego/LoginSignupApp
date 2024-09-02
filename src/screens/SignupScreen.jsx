import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from 'react';
import { colors } from '../styles/BaseStyles'; 
import styles from "../styles/SignupStyles"; // Import the styles
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const [secureEntery, setSecureEntery] = useState(true);

  const handleGoBack = () => {    
    navigation.navigate("Welcome");
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
