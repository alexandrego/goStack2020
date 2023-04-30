import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, numv=ber, boolean, object, Array
// interfaces

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'alexandre@rocketseat.com.br',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  return res.json({ message: 'Alexandre Gonçalves' });
}