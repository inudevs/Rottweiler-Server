import express, { json, urlencoded, static as Static } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { connect } from 'mongoose';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import router from './routes';
import swaggerOptions from './swagger';

const app = express();  

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.set('json spaces', 2);

app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Static(join(__dirname, 'public')));

app.use('/', router);

connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log('mongodb conncected');
  },
);

export default app;
