const express = requiere('express');
const dotenv = requiere('dotenv');
const cors = requiere('cors');
// Configuración de variables de entorno
dotenv.config();
const app = express();
// Middlewares (Software de apoyo)
app.use(cors()) // Permite que tu frontend se comunique con el backend
app.use(express.json());// Permite que el servidor entienda formato JSON

// Ruta de prueba
app.get('/',(req, res) => {
    res.send('El servidor del Café está funcionando correctamente');
});

//Arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servicor corriendo en el puerto ${PORT}`);
});