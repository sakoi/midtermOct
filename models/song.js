var mongoose = require('mongoose');
var songSchema = new mongoose.Schema({
    title: {
        type: String},
    artist: {
        type: String,
            required: 'Provide artist name' },
    year: {
        type: String,
            required: 'Provide year of release' }

});

module.exports = mongoose.model('Song', songSchema);