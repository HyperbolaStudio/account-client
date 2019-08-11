"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accessor_1 = require("./accessor");
function followValidate(req) {
    return typeof (req.targetID) == 'number';
}
exports.followValidate = followValidate;
function qFollowListValidate(req) {
    return typeof (req.amount) == 'number' && typeof (req.offset) == 'number';
}
exports.qFollowListValidate = qFollowListValidate;
function follow(req, path) {
    return accessor_1.accessor(req, path, followValidate);
}
exports.follow = follow;
function queryFollowList(req, path) {
    return accessor_1.accessor(req, path, qFollowListValidate);
}
exports.queryFollowList = queryFollowList;
function queryFollowAmount(path) {
    return accessor_1.accessor(undefined, path);
}
exports.queryFollowAmount = queryFollowAmount;
