import { accessor } from './accessor';
export function followValidate(req) {
    return typeof (req.targetID) == 'number';
}
export function qFollowListValidate(req) {
    return typeof (req.amount) == 'number' && typeof (req.offset) == 'number';
}
export function follow(req, path) {
    return accessor(req, path, followValidate);
}
export function queryFollowList(req, path) {
    return accessor(req, path, qFollowListValidate);
}
export function queryFollowAmount(path) {
    return accessor(undefined, path);
}
