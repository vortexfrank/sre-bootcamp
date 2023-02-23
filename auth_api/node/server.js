import express from 'express';
import bodyParser from 'body-parser';
const app = express();

import * as routes from './routes/index.js';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
routes.init(app);

export default app;
