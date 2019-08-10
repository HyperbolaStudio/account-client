"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonLikeA = (function (_super) {
    __extends(ButtonLikeA, _super);
    function ButtonLikeA() {
        var _this = _super.call(this) || this;
        _this.link = document.createElement('link');
        _this.container = document.createElement('div');
        _this.a = document.createElement('a');
        var shadow = _this.attachShadow({ mode: 'open' });
        _this.link.rel = 'stylesheet';
        shadow.appendChild(_this.link);
        shadow.appendChild(_this.container);
        _this.container.appendChild(_this.a);
        return _this;
    }
    return ButtonLikeA;
}(HTMLElement));
exports.ButtonLikeA = ButtonLikeA;
var ListA = (function (_super) {
    __extends(ListA, _super);
    function ListA() {
        var _this = _super.call(this) || this;
        _this.link.href = '/dist/css/list_a.css';
        return _this;
    }
    return ListA;
}(ButtonLikeA));
exports.ListA = ListA;
customElements.define('l-a', ListA);
var ButtonA = (function (_super) {
    __extends(ButtonA, _super);
    function ButtonA() {
        var _this = _super.call(this) || this;
        _this.link.href = '/dist/css/button_a.css';
        return _this;
    }
    return ButtonA;
}(ButtonLikeA));
exports.ButtonA = ButtonA;
customElements.define('b-a', ButtonA);
