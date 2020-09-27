"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JeopardyService =
/*#__PURE__*/
function () {
  function JeopardyService() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://jservice.io/api/random';
    var client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _axios["default"].create();

    _classCallCheck(this, JeopardyService);

    this.url = url;
    this.client = client;
  }

  _createClass(JeopardyService, [{
    key: "getQuestion",
    value: function getQuestion() {
      return this.client.get(this.url);
    }
  }]);

  return JeopardyService;
}();

var _default = JeopardyService;
exports["default"] = _default;