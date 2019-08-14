"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.withCredentials = true;
require("../view/index");
require("../test/ajax_cookie");
require("../test/upload");
