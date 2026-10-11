const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./database'); // 👈 ahora importamos desde database.js

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
const clientRoutes = require('./routes/clientRoutes');
const roleRoutes = require('./routes/roleRoutes');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

// Middleware de errores
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(cors());
app.use(express.json());

// Prefijo /api para todas las rutas
app.use('/api/clients', clientRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found"
  });
});

// Middleware centralizado de errores
app.use(errorMiddleware);

console.log('Starting server with config:', {
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});


// Conexión con Sequelize
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Sequelize connected and models synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting Sequelize:', error.message);
  });
