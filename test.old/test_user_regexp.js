"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = require("../lib/register");
var users = [{
        username: 'aaa_bbb',
        nickname: 'aaa_bbb',
        res: true,
    }, {
        username: 'aa12Acj__i',
        nickname: 'as of_9 72',
        res: true,
    }, {
        username: '♂',
        nickname: '8021_oaui',
        res: false,
    }, {
        username: '9j78wf_nkn',
        nickname: 'van♂漾',
        res: true,
    }, {
        username: '\' OR 1=1;DROP DATABASE users --',
        nickname: '809j',
        res: false,
    }, {
        username: '012830ojafSIHF',
        nickname: 'ihaf\niahu',
        res: false,
    }];
for (var x in users) {
    var a = users[x];
    if (register_1.validate({
        username: a.username,
        passwordSHA256: '',
        inviteCode: '',
        nickname: a.nickname,
    }) !== a.res) {
        console.log('error', x);
    }
    else {
        console.log('success', x);
    }
}
