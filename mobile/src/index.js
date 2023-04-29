import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projetos').then(res => {
      console.log(res.data);
      setProjects(res.data);
    })    
    .catch(error => console.log(error));
  }, []);

  async function handleAddProject() {
    const res = await api.post('projetos', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Alexandre Gonçalves'
    });
    const project = res.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2f0101" />

      <SafeAreaView style={styles.container}>
        <FlatList          
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f0101',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    // fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});