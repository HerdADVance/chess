var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PieceSchema = new Schema({
	type: String,
	position: Number,
	captured: { type: Boolean, default: false},
	hasMoved: { type: Boolean, default: false}
});

module.exports = mongoose.model('Piece', PieceSchema);