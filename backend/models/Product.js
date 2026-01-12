const mongoose = require('mongoose');

// Definimos el "esquma" (la estructura de los datos)

const ProductSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre del café es obligatorio']
    },
    precio:{
        type: Number,
        require: [true, 'El precio es obligatorio']
    },
    description: String,
    stock: {
        type: Number,
        default: 0
    },
    imagenUrl: String,
    categoria:{
        type: String,
        enum: ['Grano', 'Molido', 'Capsulas'],
        default: 'Grano'
    }
}, {
        timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema);