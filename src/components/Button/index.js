import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.buttonTitle}>Add</Text>
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
