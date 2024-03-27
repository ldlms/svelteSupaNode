import { handler } from './build/handler.js';
import express, {Express} from 'express';
const port = 3000;

const app:Express = express();

app.use(express.static('public'));

app.use(handler);

app.listen(port,()=> console.log(`Bonjour du port ${port}`));