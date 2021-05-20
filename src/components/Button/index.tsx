import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet 
} from 'react-native';


interface ButtonProps extends TouchableOpacityProps {
  title: String
}

function Button({ title, ...rest }:ButtonProps)  {
  return (
    <TouchableOpacity 
      style={styles.button}
      {...rest}
      >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A37AF7',
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
