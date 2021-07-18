"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const add_1 = __importDefault(require("./add"));
const update_1 = __importDefault(require("./update"));
const getAll_1 = __importDefault(require("./getAll"));
const get_1 = __importDefault(require("./get"));
const delete_1 = __importDefault(require("./delete"));
const user = express_1.Router();
// get all users
user.get('/', getAll_1.default);
//handle request
user.post('/add', 
//username must be string no empty
express_validator_1.body('username').isString(), 
// email must be string no empty
express_validator_1.body('email').isEmail(), 
//password must be string no empty min length  is 8  chars
express_validator_1.body('password').isString().isLength({ min: 8 }), add_1.default);
user.put('/update/:id', //username must be string no empty
express_validator_1.body('username').isString(), 
//password must be string no empty min length  is 8  chars
express_validator_1.body('password').isString().isLength({ min: 8 }), update_1.default);
// get user by id
user.get('/:id', get_1.default);
// soft delete user by id
user.put('/delete/:id', delete_1.default);
exports.default = user;
