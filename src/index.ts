import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { validateDotEnv } from './validateDotEnv';

dotenv.config();
validateDotEnv(process.env);

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.info(`App listening on port ${port} - happy injecting!`);
});
