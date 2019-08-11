"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("./regexp");
var accessor_1 = require("./accessor");
function validate(user) {
    return Boolean(user.username && user.passwordSHA256 && user.inviteCode &&
        regexp_1.user.username.regexp.test(user.username) &&
        (user.nickname ? regexp_1.user.nickname.regexp.test(user.nickname) : true) &&
        regexp_1.user.passwordSHA256.regexp.test(user.passwordSHA256) &&
        regexp_1.user.inviteCode.regexp.test(user.inviteCode));
}
exports.validate = validate;
function register(user, path) {
    return accessor_1.accessor(user, path, validate);
}
exports.register = register;
