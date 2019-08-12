"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var declarations_1 = require("./declarations");
var regexp_1 = require("./regexp");
var accessor_1 = require("./accessor");
function validate(req) {
    if (!req.queryName || !req.queryCol) {
        return false;
    }
    if (req.queryCol == declarations_1.QueryUserCol.USERNAME) {
        if (typeof (req.queryName) != 'string' || !regexp_1.user.username.regexp.test(req.queryName)) {
            return false;
        }
    }
    else if (req.queryCol == declarations_1.QueryUserCol.USERID) {
        if (typeof (req.queryName) != 'number') {
            return false;
        }
    }
    else {
        return false;
    }
    return true;
}
exports.validate = validate;
function queryUser(req, path) {
    return accessor_1.accessor(req, path, validate);
}
exports.queryUser = queryUser;
