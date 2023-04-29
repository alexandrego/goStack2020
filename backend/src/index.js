const express = require('express');
const cors = require('cors');
const { v4:uuid_v4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

app.use(logRequests);

app.get('/projetos', (req, res) => {
  const { title } = req.query;

  const results = title
  ? projects.filter(project => project.title.includes(title))
  : projects;

  // Query Params: Filtros e paginação
  // const {title, owner} = req.query;
  // console.log(title);
  // console.log(owner);

  return res.json(results);
});

app.post('/projetos', (req, res) => {

  // Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
  const {title, owner} = req.body;
  const project = {id: uuid_v4(), title, owner};
  projects.push(project);

  return res.json(project);
});

app.put('/projetos/:id', (req, res) => {

  // Route Params: Identificar recursos(Atualizar/Deletar)
  const { id } = req.params;
  const { title, owner } = req.body;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(404).json({ error: 'Project not found.'})
  }

  const project = {
    id,
    title,
    owner,
  };
  
  projects[projectIndex] = project;

  return res.json(project);
});

app.delete('/projetos/:id', (req, res) => {
  const { id } = req.params;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(404).json({ error: 'Project not found.'})
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(3333, () =>{
  console.log('🌍 Servidor Online');
});