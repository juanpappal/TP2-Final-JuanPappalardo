import 'dotenv/config';
import express from 'express';
import sensorsRoutes from './routes/sensors.js';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(sensorsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API ready' });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ errorMsg: err.message || 'Error interno del servidor' });
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
