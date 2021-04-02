import 'reflect-metadata';

import express from 'express';
import SwaggerUI from 'swagger-ui-express';

import './database';
import './shared/container';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
app.use(express.json());

app.use(router);

app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log('Server is running on 3333'));
