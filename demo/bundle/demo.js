"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var $formDefault = document.getElementsByClassName('form-check')[0];
window.formDefault = new Validation({
  $form: $formDefault,
  errorWrapperClass: 'demo__error',
  errorShowClass: 'demo__input-wrapper--error'
});
window.formDefault.init();

var ValidationExtended = /*#__PURE__*/function (_Validation) {
  _inherits(ValidationExtended, _Validation);

  var _super = _createSuper(ValidationExtended);

  function ValidationExtended(options) {
    var _this;

    _classCallCheck(this, ValidationExtended);

    _this = _super.call(this, options);

    _this.rulesList.set('check-16', {
      checkEvents: ['change'],
      errorMessage: 'Поле содержит не 16 символов',
      functionCheck: _this.validateContent16symbols
    });

    return _this;
  } // Проверка контента, содержит ли поле 16 символов


  _createClass(ValidationExtended, [{
    key: "validateContent16symbols",
    value: function validateContent16symbols($field, $elem, errorMessage) {
      var val = $elem.value;
      var validate = val.length === 16;
      var priority = 100;
      return {
        validate: validate,
        message: errorMessage,
        priority: priority
      };
    }
  }]);

  return ValidationExtended;
}(Validation);

var $formExtended = document.getElementsByClassName('form-check')[1];
window.formExtended = new ValidationExtended({
  $form: $formExtended,
  errorWrapperClass: 'demo__error',
  errorShowClass: 'demo__input-wrapper--error'
});
window.formExtended.init();
//# sourceMappingURL=demo.js.map