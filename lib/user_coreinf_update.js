"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("./regexp");
var accessor_1 = require("./accessor");
function validate(req) {
    if (req.username) {
        var r = regexp_1.user.username.regexp.test(req.username);
        if (!r)
            return r;
    }
    if (req.nickname) {
        var r = regexp_1.user.nickname.regexp.test(req.nickname);
        if (!r)
            return r;
    }
    if (req.passwordSHA256) {
        if (!req.originPswSHA256)
            return false;
        var rexp = regexp_1.user.passwordSHA256.regexp;
        var r = rexp.test(req.passwordSHA256) && rexp.test(req.originPswSHA256);
        if (!r)
            return r;
    }
    return true;
}
exports.validate = validate;
function userCoreInfUpdate(req, path) {
    return accessor_1.accessor(req, path, validate);
}
exports.userCoreInfUpdate = userCoreInfUpdate;
