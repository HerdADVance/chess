var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
	status: { type: String, default: 'Waiting' },
	white: { type: Schema.Types.ObjectId, ref: 'Side' },
	black: { type: Schema.Types.ObjectId, ref: 'Side' },
	moves: []
});

module.exports = mongoose.model('Game', GameSchema);