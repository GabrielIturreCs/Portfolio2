const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: false,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500
    },
    avatar: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
        enum: [
            'Calidad de Código',
            'Arquitectura',
            'Velocidad',
            'Comunicación',
            'Diseño UX',
            'Frontend',
            'Experiencia de Usuario',
            'Lógica Backend',
            'Innovación',
            'Liderazgo'
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
