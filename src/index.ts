export {};

// EXAMPLE 1

import express, { Request, Response } from 'express';

const app = express();
const port = 3445;

app.get('/', (req: Request, res: Response) => {
  req.user = 'bobby_hadz'; // 👈️ use req.user
  console.log(req.user); // 👈️ use req.user

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// ---------------------------------------------------

// EXAMPLE 2

// ---------------------------------------------------

// EXAMPLE 3
