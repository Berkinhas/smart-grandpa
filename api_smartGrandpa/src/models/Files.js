const mongoose = require('mongoose')

//Fazer a referencia para o usuario

const FileSchema = new mongoose.Schema({
    nome: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'UserCommon', ref: 'UserCareviger'},
    size: Number,
    key: String,
    url: String,
    data_criada: {
        type: Date,
        default: Date.now
    }
})

const UserFiles = mongoose.model('Files', FileSchema)

module.exports = UserFiles