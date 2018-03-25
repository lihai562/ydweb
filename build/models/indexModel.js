"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dns = require("dns");

class IndexModel {
  constructor(app) {}
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello IndexAction");
      }, 1000);
      //throw new Error("")
      //reject("")
    });
  }
}
exports.default = IndexModel;