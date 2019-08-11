"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("../lib/login");
var follow_1 = require("../lib/follow");
var query_user_1 = require("../lib/query_user");
var declarations_1 = require("../lib/declarations");
function wa(a) {
    console.log(a);
    console.log('\u001b[41;37m Wrong Answer \u001b[0m');
}
function t() {
    return __awaiter(this, void 0, void 0, function () {
        var st, res, ed, users, i, _a, _b, i, targetID;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('start');
                    st = Date.now();
                    ed = Date.now();
                    console.log("register 2 user used " + (ed - st) + " ms");
                    st = Date.now();
                    return [4, login_1.login({
                            loginName: '0aaa',
                            loginType: 1,
                            passwordSHA256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
                        }, 'http://localhost:3000/api/login')];
                case 1:
                    res = _c.sent();
                    if (res.status != 'Success') {
                        wa(res.status);
                        return [2];
                    }
                    ;
                    ed = Date.now();
                    console.log("login 1 user used " + (ed - st) + " ms");
                    st = Date.now();
                    users = [];
                    i = 10;
                    _c.label = 2;
                case 2:
                    if (!(i < 20)) return [3, 5];
                    _b = (_a = users).push;
                    return [4, query_user_1.queryUser({
                            queryName: i + "aaa",
                            queryCol: declarations_1.QUERY_USER_REQUEST_QUERY_COL_USERNAME,
                        }, 'http://localhost:3000/api/user/query')];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3, 2];
                case 5:
                    ed = Date.now();
                    console.log("query 10 user used " + (ed - st) + " ms");
                    st = Date.now();
                    i = 0;
                    _c.label = 6;
                case 6:
                    if (!(i < 10)) return [3, 9];
                    res = users[i];
                    if (res.status != 'Success' || !res.user) {
                        wa(res.status);
                        return [2];
                    }
                    targetID = res.user.userID;
                    return [4, follow_1.follow({ targetID: targetID }, 'http://localhost:3000/api/follow')];
                case 7:
                    res = _c.sent();
                    if (res.status != 'Success') {
                        wa(res.status);
                        return [2];
                    }
                    _c.label = 8;
                case 8:
                    i++;
                    return [3, 6];
                case 9:
                    ed = Date.now();
                    console.log("followed 10 user used " + (ed - st) + " ms");
                    console.log('finished');
                    return [2];
            }
        });
    });
}
t();
