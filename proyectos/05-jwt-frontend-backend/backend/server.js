// EN server levanto el servidor
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const url = process.env.URL;

app.listen(port, () => {
  console.log(`Server running on  ${url}:${port}`);
});