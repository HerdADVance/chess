var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//var Piece = require('../models/piece.js');

// var rook = new Piece;
// rook.position = 11;


var WhiteSchema = new Schema({
	rook: { type: Schema.Types.ObjectId, ref: 'Piece' },
	queen: { type: Schema.Types.ObjectId, ref: 'Piece' }
});

module.exports = mongoose.model('White', WhiteSchema);