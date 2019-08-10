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
var query_user_1 = require("../lib/query_user");
var declarations_1 = require("../lib/declarations");
var UserInfElement = (function (_super) {
    __extends(UserInfElement, _super);
    function UserInfElement() {
        var _this = _super.call(this) || this;
        _this.styleLink = document.createElement('link');
        _this.mainDiv = document.createElement('div');
        _this.avatar = document.createElement('img');
        _this.usernameDiv = document.createElement('a');
        var shadow = _this.attachShadow({ mode: 'open' });
        shadow.appendChild(_this.mainDiv);
        _this.styleLink.rel = 'stylesheet';
        _this.styleLink.href = '/dist/css/userinf.css';
        shadow.appendChild(_this.styleLink);
        _this.mainDiv.appendChild(_this.avatar);
        _this.mainDiv.appendChild(_this.usernameDiv);
        _this.mainDiv.id = 'main-div';
        _this.avatar.id = 'avatar';
        _this.usernameDiv.id = 'username-div';
        return _this;
    }
    Object.defineProperty(UserInfElement, "observedAttributes", {
        get: function () {
            return ['uid'];
        },
        enumerable: true,
        configurable: true
    });
    UserInfElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        var _this = this;
        if (name == 'uid' && newVal) {
            this.avatar.src = "/api/avatar/" + newVal;
            this.usernameDiv.href = "/user/" + newVal;
            this.avatar.onclick = function () {
                location.href = "/user/" + newVal;
            };
            query_user_1.queryUser({
                queryName: Number(newVal),
                queryCol: declarations_1.QUERY_USER_REQUEST_QUERY_COL_USERID,
            }, '/api/user/query').then(function (res) {
                if (res.status == 'Success' && res.user) {
                    _this.usernameDiv.innerText = res.user.username;
                }
            });
        }
    };
    return UserInfElement;
}(HTMLElement));
exports.UserInfElement = UserInfElement;
customElements.define('user-inf', UserInfElement);
