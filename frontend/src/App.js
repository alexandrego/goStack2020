import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';
/**
* Componente
* Propriedade
* Estado & Imutabilidade
*/

function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projetos').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projetos', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Alexandre Campos"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>      
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.owner}, {project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;