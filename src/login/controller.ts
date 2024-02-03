import { RequestHandler } from 'express';
import { z } from 'zod';
import { getHtmlPath } from '../utils/getHtmlPath';
import { validate } from '../utils/validate';

export const getLogin: RequestHandler = function (req, res) {
  console.log(getHtmlPath('login.html'));
  res.sendFile(getHtmlPath('login.html'));
};

const postLoginSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

export const postLogin: RequestHandler = function (req, res) {
  try {
    validate(req, postLoginSchema);
    const { username, password } = req.body;

    const tableData = {
      username,
      password,
    };

    console.info('Login attempted');
    console.table(tableData);

    res.status(200).sendFile(getHtmlPath('login.html'));
  } catch (error) {
    console.error('Something went wrong:', error);
    res.status(500).send(error);
  }
};

export const postBadLogin: RequestHandler = function (req, res) {
  try {
    validate(req, postLoginSchema);
    const { username, password, 'maths-question': mathsQuestion } = req.body;

    const tableData = {
      username,
      password,
      mathsQuestion,
    };

    console.info('Login attempted');
    console.table(tableData);

    const mathsAnswer = Number(mathsQuestion) || eval(mathsQuestion);
    if (mathsAnswer !== 6) {
      throw new Error("Sorry! That's the wrong answer");
    }
    console.info('Correct answer!');

    res.status(200).sendFile(getHtmlPath('login.html'));
  } catch (error) {
    console.error('Something went wrong:', error);
    res.status(500).send(error);
  }
};
