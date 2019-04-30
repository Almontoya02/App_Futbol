const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const jugador = new Schema(
    {
      nombre: String,
      equipo_id: {
        type: ObjectId,
        ref: 'equipo'
      }
    },
    {
      collection: 'jugador',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('jugador', jugador)