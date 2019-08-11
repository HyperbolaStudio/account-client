import { login } from "../lib/login";
let userinf = [{
        loginName: '123',
        loginType: 1,
        passwordSHA256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
    } /* ,{
        loginName:40,
        loginType:2,
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
    },{
        loginName:'wfe',
        loginType:1,
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
    },{
        loginName:20,
        loginType:2,
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
    },{
        loginName:40,
        loginType:2,
        passwordSHA256:'66a5a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
    } */
];
let res = [true, true, false, false, false];
async function t() {
    for (let i in userinf) {
        let x = userinf[i];
        login(x, 'http://localhost:3000/api/login').then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }
}
t();
