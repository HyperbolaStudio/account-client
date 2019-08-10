"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("./regexp");
var declarations_1 = require("./declarations");
var accessor_1 = require("./accessor");
function validate(req) {
    if (!req.loginName || !req.loginType || !req.passwordSHA256) {
        return false;
    }
    var ret = false;
    if (req.loginType == declarations_1.LOGIN_REQUEST_LOGIN_TYPE_USERNAME) {
        ret = regexp_1.user.username.regexp.test(req.loginName);
    }
    if (req.loginType == declarations_1.LOGIN_REQUEST_LOGIN_TYPE_USERID) {
        ret = typeof req.loginName == 'number';
    }
    return ret && regexp_1.user.passwordSHA256.regexp.test(req.passwordSHA256);
}
exports.validate = validate;
function login(req, path) {
    return accessor_1.accessor(req, path, validate);
}
exports.login = login;
