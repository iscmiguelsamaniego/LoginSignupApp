import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={AppStyles.button} onPress={onPress}>
      <Text style={AppStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
