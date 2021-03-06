'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _express = _interopRequireDefault(require('express'));

var _authController = require('./authController');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = _express['default'].Router();

router.post('/register', _authController.registerController);
router.post('/login', _authController.loginController);
var _default = router;
exports['default'] = _default;
