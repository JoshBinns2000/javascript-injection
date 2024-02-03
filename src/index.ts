import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { validateDotEnv } from './validateDotEnv';
import { loginRoutes } from './login/routes';
import { getHtmlPath } from './utils/getHtmlPath';
import bodyParser from 'body-parser';

dotenv.config();
validateDotEnv(process.env);

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser());
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/pages')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.sendFile(getHtmlPath('index.html'));
});

app.use('/login', loginRoutes);

app.listen(port, () => {
  console.info(`App listening on port ${port} - happy injecting!`);
});
