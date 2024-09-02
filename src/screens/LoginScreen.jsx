import React, { useState } from 'react';
import { 
  Image, 
  ImageBackground, 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { styles } from '../styles/LoginStyles';
import { colors } from '../styles/BaseStyles'; 
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.navigate('Welcome');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      source={require('../images/background.png')}
      style={styles.containerBackgroundImg}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.iconWrapper} onPress={handleGoBack}>
          <Image
            source={require('../images/arrow_back.png')}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Hey,</Text>
          <Text style={styles.headingText}>Hola de nuevo</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../images/email.png')}
              style={styles.iconWhite}
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
              source={require('../images/lock.png')}
              style={styles.iconWhite}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor={colors.white}
              secureTextEntry={secureEntry}
            />
            <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
              <Image
                source={require('../images/eye.png')}
                style={styles.iconWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>E n t r a r</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.bodyText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.linkText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
