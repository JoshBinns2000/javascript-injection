import express from 'express';
import { getLogin, postBadLogin, postLogin } from './controller';

export const loginRoutes = express.Router();

loginRoutes.get('/', getLogin);

// loginRoutes.post('/', postLogin);
loginRoutes.post('/', postBadLogin);
