import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface CardProps extends TouchableOpacityProps {
  title: String
}

function Card({ title, ...rest }: CardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
      >
      <Text style={styles.skill}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;
