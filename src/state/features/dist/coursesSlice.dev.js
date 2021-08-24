"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectError = exports.selectLoaded = exports.selectCourses = exports.coursesSlice = exports.loadCourses = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _network = require("../../constants/network");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  value: [],
  loaded: false,
  error: null
};
var loadCourses = (0, _toolkit.createAsyncThunk)("courses/fetchCourses", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _axios["default"].get(_network.coursesRoute).then(function (result) {
            return {
              value: result.data,
              loaded: true
            };
          })["catch"](function (error) {
            console.log(error);
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.loadCourses = loadCourses;
var coursesSlice = (0, _toolkit.createSlice)({
  name: "courses",
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, loadCourses.pending, function (state) {
    state.loaded = false;
  }), _defineProperty(_extraReducers, loadCourses.fulfilled, function (state, action) {
    if (action.payload) {
      state.value = action.payload.value;
      state.error = null;
      state.loaded = true;
    } else {
      state.error = "Program listesi yüklenemedi :/";
    }
  }), _extraReducers)
});
exports.coursesSlice = coursesSlice;

var selectCourses = function selectCourses(state) {
  return state.courses.value;
};

exports.selectCourses = selectCourses;

var selectLoaded = function selectLoaded(state) {
  return state.courses.loaded;
};

exports.selectLoaded = selectLoaded;

var selectError = function selectError(state) {
  return state.courses.error;
};

exports.selectError = selectError;
var _default = coursesSlice.reducer;
exports["default"] = _default;