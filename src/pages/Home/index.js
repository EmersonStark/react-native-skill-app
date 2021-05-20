import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Emerson Souza</Text>

      <TextInput
        placeholder="Digite uma skill..."
        placeholderTextColor="#555"
        onChangeText={skill => setNewSkill(skill)}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddNewSkill()}>
        <Text style={styles.buttonTitle}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 50}]}>Skills</Text>

      {mySkills.map(skill => (
        <TouchableOpacity style={styles.buttonSkill} key={skill}>
          <Text style={styles.skill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
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

export default Home;
