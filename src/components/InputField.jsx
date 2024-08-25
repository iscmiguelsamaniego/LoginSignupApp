import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      {label && <Text style={AppStyles.label}>{label}</Text>}
      <TextInput
        style={AppStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputField;
