import hash from 'hash.js';
export function genSHA256(t:string):string{
    return hash.sha256().update(t).digest('hex');
}