import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function Card({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.skill}>{skill.title}</Text>
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
