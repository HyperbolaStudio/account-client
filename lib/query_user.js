import { QUERY_USER_REQUEST_QUERY_COL_USERNAME, QUERY_USER_REQUEST_QUERY_COL_USERID } from "./declarations";
import { user } from "./regexp";
import { accessor } from "./accessor";
export function validate(req) {
    if (!req.queryName || !req.queryCol) {
        return false;
    }
    if (req.queryCol == QUERY_USER_REQUEST_QUERY_COL_USERNAME) {
        if (typeof (req.queryName) != 'string' || !user.username.regexp.test(req.queryName)) {
            return false;
        }
    }
    else if (req.queryCol == QUERY_USER_REQUEST_QUERY_COL_USERID) {
        if (typeof (req.queryName) != 'number') {
            return false;
        }
    }
    else {
        return false;
    }
    return true;
}
export function queryUser(req, path) {
    return accessor(req, path, validate);
}
