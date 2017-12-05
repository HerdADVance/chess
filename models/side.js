var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SideSchema = new Schema({
	player: { type: Schema.Types.ObjectId, ref: 'Player' },
	white: Boolean,
	toAct: Boolean,
	pieces: [],
	captured: []
});

module.exports = mongoose.model('Side', SideSchema);