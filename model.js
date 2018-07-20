'use strict';

var fs = require('fs')
var content = fs.readFileSync('./inventory.json')

var inventory = JSON.parse(content)

function homepage(reporter) {
    reporter(null, fs.readFileSync('./page.html'));
}


var Doc = {
    
    save: function(newContent, reporter) {
        inventory = JSON.parse(newContent);
        reporter(null, "save completely!");
    },

    get_all: function(reporter) {
        reporter(null, JSON.stringify(inventory));
    },
    findById: function(id, reporter) {
        console.log("findById");
        for (let a of inventory) {
            if (a.id && a.id == id) {
                console.log('find the target' + id);
                reporter(null, JSON.stringify(a));
                return;
            } 
        }
        console.log("didn;t find the target " + id);
        reporter('no object', "Can't find the object");
    },

    findByIdAndUpdate: function(id, obj, reporter) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].id && inventory[i].id == id) {
                inventory[i] = obj;
                reporter(null, "update completely!");
                return;
            }    
        }
        console.log("didn't find that url" + id);
        reporter("no object", "Can't find the object");
    },

    remove: function(id, reporter) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].id && inventory[i].id == id) {
                inventory.splice(i, 1);
                reporter(null, "remove completely!");
            }            
        }
        reporter('no object', "Can't find the object");
    }
}


exports.homepage = homepage

exports.get_all = Doc.get_all

exports.save = Doc.save

exports.findById = Doc.findById

exports.findByIdAndUpdate = Doc.findByIdAndUpdate

exports.remove = Doc.remove

