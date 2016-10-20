var express = require('express');
var router = express.Router();

//connect to song model
var Song = require('../models/song');

//get handler for /songs - url handled in app.js
router.get('/', function(req, res, next){

    //run query
    Song.find(function (err, songs) {
            if (err) {
                console.log(err);
                res.render('error');
            }
            else {
                res.render('songs', {
                    title: 'Songs',
                    songs: songs
                });
            }
        });
    });

module.exports = router;

