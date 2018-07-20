'use strict'

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

passport.use(new localStorage({
    'usenameField': 'email',
    'passwordField': 'password'
}),
function(usename, password, done) {

});


