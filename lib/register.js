import { user as regexpMap } from './regexp';
import { accessor } from './accessor';
export function validate(user) {
    return Boolean(user.username && user.passwordSHA256 && user.inviteCode &&
        regexpMap.username.regexp.test(user.username) &&
        (user.nickname ? regexpMap.nickname.regexp.test(user.nickname) : true) &&
        regexpMap.passwordSHA256.regexp.test(user.passwordSHA256) &&
        regexpMap.inviteCode.regexp.test(user.inviteCode));
}
export function register(user, path) {
    return accessor(user, path, validate);
}
