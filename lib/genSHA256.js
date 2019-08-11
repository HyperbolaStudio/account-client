import hash from 'hash.js';
export function genSHA256(t) {
    return hash.sha256().update(t).digest('hex');
}
