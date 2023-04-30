import express, { application } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// app.get('/', (req, res) => {
//  return res.json({ message: 'Fabiana Gonçalves' });
// })

app.listen(3333, () => {
  console.log('🌍 Online ✔');
});
