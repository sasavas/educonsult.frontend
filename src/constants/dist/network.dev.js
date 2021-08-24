"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipelinesRoute = exports.registerStudent = exports.studentById = exports.studentsRoute = exports.coursesRoute = exports.networkBase = void 0;
var networkBase = "http://localhost:3008";
/** Course Routes */

exports.networkBase = networkBase;
var programs = "programs";
var coursesRoute = "".concat(networkBase, "/").concat(programs);
/** Students Routes */

exports.coursesRoute = coursesRoute;
var students = "students";
var studentsRoute = "".concat(networkBase, "/").concat(students);
exports.studentsRoute = studentsRoute;

var studentById = function studentById(id) {
  return "".concat(networkBase, "/").concat(students, "/").concat(id);
};

exports.studentById = studentById;

var registerStudent = function registerStudent(studentId, programId) {
  return "".concat(networkBase, "/").concat(students, "/").concat(studentId, "/").concat(programId);
};
/** Pipeline Routes */


exports.registerStudent = registerStudent;
var pipelines = "pipelines";
var pipelinesRoute = "".concat(networkBase, "/").concat(pipelines);
exports.pipelinesRoute = pipelinesRoute;