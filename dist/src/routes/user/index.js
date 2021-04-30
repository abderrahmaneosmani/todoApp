"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const add_1 = __importDefault(require("./add"));
const getAll_1 = __importDefault(require("./getAll"));
const user = express_1.Router();
user.get('/', getAll_1.default);
//handle request
user.post('/add', 
//username must be string no empty
express_validator_1.body('username').isString(), 
// email must be string no empty
express_validator_1.body('email').isEmail(), 
//password must be string no empty min length  is 8  chars
express_validator_1.body('password').isString().isLength({ min: 8 }), add_1.default);
exports.default = user;
