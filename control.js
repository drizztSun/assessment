'use strict'

var doc = require('./model.js');

exports.homepage = function(req, res) {

    doc.homepage(function(err, task){
        if (err)
            res.send(err);

        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(task);
        res.end();
    });
}
exports.list_courses = function(req, res) {

    doc.get_all(function(err, task) {
        if (err)
            res.statusCode = 404;

        res.json(task);
    });
};

exports.create_courses = function(req, res) {

    doc.save(req.body, function(err, task) {
        if (err)
            res.statusCode = 404;

        res.json(task);
    });
};

exports.read_a_course = function(req, res) {

    doc.findById(req.params.courseId, function(err, task) {
        if (err)
            res.statusCode = 404;

        res.json(task)
    });
};

exports.update_a_task = function(req, res) {

    doc.findByIdAndUpdate(req.params.courseId, req.body, function(err, task) {
        if (err)
            res.statusCode = 404;

        res.json(task)
    });
};

exports.delete_a_task = function(req, res) {

    doc.remove(req.params.courseId, function(err, task) {
        if (err)
            res.statusCode = 404;

        res.json({ message: "delete successfully"});
    });
};