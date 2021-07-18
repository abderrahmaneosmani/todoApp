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
const list = express_1.Router();
// get all Lists
list.get('/', getAll_1.default);
//handle request
list.post('/add', express_validator_1.body('title').isString(), express_validator_1.body('userId').isInt().toInt(), express_validator_1.body('taskId').isInt().toInt(), add_1.default);
list.put('/update/:id', express_validator_1.body('title').isString(), express_validator_1.body('userId').isInt().toInt(), express_validator_1.body('taskId').isInt().toInt(), update_1.default);
// get list by id
list.get('/:id', get_1.default);
// soft delete list by id
list.put('/delete/:id', delete_1.default);
exports.default = list;
