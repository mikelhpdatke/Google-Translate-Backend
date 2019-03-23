var mongoose = require('mongoose');


var googleSchema = new mongoose.Schema({
  input: String,
  vie: String,
  meaning: [
    {
      keyType: String,
      meaning: String,
      example: String,
      syms: Array
    },
    {
      keyType: String,
      meaning: String,
      example: String,
      syms: Array
    }
  ],
  trans: [
    {
      keyType: String,
      translate: [
        {
          name: String,
          meaning: Array
        }
      ]
    }
  ],
  example: Array,
  smallsyms: [
    {
      keyType: String,
      sym: Array
    }
  ],
  syms: [
    {
      keyType: String,
      sym: Array
    }
  ]
});

var Google = mongoose.model('Google', googleSchema);

module.exports = { Google };
