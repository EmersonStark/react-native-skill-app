import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList} from 'react-native';

import Button from '../../components/Button';
import Card from '../../components/Card';

interface skillData {
  id: string;
  title: string;
  // Optional prop
  date?: Date
}

function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<skillData[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      title: newSkill
    }
    setMySkills(prevState => [...prevState, data]);
    setNewSkill('');
  }


  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Emerson Souza</Text>

      <TextInput
        placeholder="Digite uma skill..."
        placeholderTextColor="#555"
        value={newSkill}
        onChangeText={skill => setNewSkill(skill)}
        style={styles.input}
      />

      <Button
        title="Adicionar"
        onPress={handleAddNewSkill}
        activeOpacity={0.4}
        />

      <Text style={[styles.title, {marginVertical: 50}]}>Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Card title={item.title} onPress={() => handleRemoveSkill(item.id)} />}
      />
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
});

export default Home;
