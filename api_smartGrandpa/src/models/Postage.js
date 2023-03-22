const mongoose = require('mongoose')

const PostageSchema = new mongoose.Schema({

    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCommon', ref: 'UserCareviger'},

    conteudo: {
        type: String,
        required: true
    },

    data_criada: {
        type: Date,
        default: Date.now
    },

    horario_criado: {
        type: Date,
        default: Date.now
    }

})

const UserPostage = mongoose.model('Postage', PostageSchema)

module.exports = UserPostage