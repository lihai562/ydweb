'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexCtroller = require('./indexCtroller');

var _indexCtroller2 = _interopRequireDefault(_indexCtroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controlerinit = {
  getAllrouters(app, router) {
    app.use(router(_ => {
      _.get('/index', _indexCtroller2.default.indexAction());
    }));
  }
};
exports.default = controlerinit;