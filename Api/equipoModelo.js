const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const equipo = new Schema(
    {
      nombre: String,
      liga_id: {
        type: ObjectId,
        ref: 'liga'
      }
    },
    {
      collection: 'equipo',
      toJSON: { virtuals: true },
      versionKey: false
    }
  )
  
  module.exports = mongoose.model('equipo', equipo)