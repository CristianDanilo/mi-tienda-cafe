const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

//RUTA: POST /api/products
//DESCRIPCIÓN: crear un nuevo café en la base de datos
router.post('/', async (req, res) =>{
    try{
        const { nombre, precio, descripcion, stock, categoria } = req.body;

        const nuevoProducto = new Product({
            nombre,
            precio,
            descripcion,
            stock,
            categoria
        });

        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);

    } catch (error){
        res.status(400).json({ mensaje: 'Error al guardar el café', error: error.message });
    }
});

//RUTA: GET /api/products
//DESCRIPCIÓN: Obtener todos los cafés
router.get('/', async (req, res) =>{
    try {
      const productos = await Product.find();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener los cafés' });
    }
})
module.exports = router