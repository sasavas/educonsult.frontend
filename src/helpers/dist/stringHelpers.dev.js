"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalizeFirstLetter = void 0;

var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  if (string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return "";
};

exports.capitalizeFirstLetter = capitalizeFirstLetter;