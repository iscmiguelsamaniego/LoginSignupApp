import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import ButtonComponent from '../components/ButtonComponent';
import { AppStyles } from '../styles/AppStyles';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup successful!');
  };

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>Sign Up</Text>
      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <ButtonComponent title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
