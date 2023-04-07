/**
 * @description HotWord Model
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema

const HotWordSchema = new Schema({
  name: String,
  data: [String]
}, {
  timestamps: true
})

const HotWord = mongoose.model('hotword', HotWordSchema)

module.exports = HotWord