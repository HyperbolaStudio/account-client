"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hash_js_1 = __importDefault(require("hash.js"));
function genSHA256(t) {
    return hash_js_1.default.sha256().update(t).digest('hex');
}
exports.genSHA256 = genSHA256;
