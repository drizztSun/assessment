'use strict'

module.exports = function(app) {

    const ctrl = require('./control.js');


    app.route('/page')
        .get(ctrl.homepage);

    app.route('/course')
        .get(ctrl.list_courses)
        .post(ctrl.create_courses);

    app.route('/course/:courseId')
        .get(ctrl.read_a_course)
        .put(ctrl.update_a_task)
        .delete(ctrl.delete_a_task);
}