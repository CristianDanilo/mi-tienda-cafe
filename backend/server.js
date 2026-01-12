const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

// Configuración de variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// --- CONEXIÓN A MONGODB ---
// Usamos la variable que definiste en el archivo .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado exitosamente a MongoDB Atlas');
    console.log('📦 Base de datos activa: ', mongoose.connection.name);
  })
  .catch((error) => {
    console.error('❌ Error de conexión detallado:');
    console.error(error.message);
  });

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('Servidor del Café funcionando y conectado a la BD');
});

// Arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
