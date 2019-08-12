"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCollection;
(function (StatusCollection) {
    StatusCollection.SUCCESS = 'Success';
    StatusCollection.FAILED = 'Failed';
    StatusCollection.NOT_LOGGED_IN = 'Not Logged In';
    StatusCollection.INVALID = 'Invalid';
    StatusCollection.USER_ALREADY_REGISTERED = 'User Already Registered';
    StatusCollection.USER_NOT_FOUND = 'User Not Found';
    StatusCollection.TARGET_USER_NOT_EXIST = 'Target User Not Exist';
    StatusCollection.UNEXPECTED_ERROR = 'Unexpected Error';
})(StatusCollection = exports.StatusCollection || (exports.StatusCollection = {}));
var QueryUserCol;
(function (QueryUserCol) {
    QueryUserCol.USERNAME = 1;
    QueryUserCol.USERID = 2;
})(QueryUserCol = exports.QueryUserCol || (exports.QueryUserCol = {}));
