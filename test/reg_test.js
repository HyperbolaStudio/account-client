"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = require("../lib/register");
var r = [{
        username: 'atxps',
        nickname: 'van',
        passwordSHA256: '11',
        inviteCode: '11',
    }, {
        nickname: '新日暮里',
        passwordSHA256: '22',
        inviteCode: '33',
    }, {
        username: '\' OR 1=1;drop database users --',
        nickname: 'iuasd7',
        passwordSHA256: 'ouiadji',
        inviteCode: 'oiuy',
    }, {
        username: 'crindzebra',
        nickname: 'CRS',
        passwordSHA256: 'badc0ffee',
        inviteCode: '90879',
    }, {
        username: 'clang',
        nickname: 'lldb',
        passwordSHA256: '59',
        inviteCode: 'p1s',
    }, {
        username: '123',
        nickname: '123',
        passwordSHA256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        inviteCode: 'a35bca97f2d5baa6',
        birthDate: [2017, 1, 23],
        gender: 'male',
    }, {
        username: '456',
        nickname: '123',
        passwordSHA256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        inviteCode: '7afaafe6c3c613da',
        birthDate: [2017, 1, 23],
        gender: 'female',
    }];
for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
    var x = r_1[_i];
    register_1.register(x, 'http://localhost:3000/api/register').then(function (response) {
    });
}
