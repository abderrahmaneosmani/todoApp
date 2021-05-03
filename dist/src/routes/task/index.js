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
const task = express_1.Router();
// get all tasks
task.get('/', getAll_1.default);
//handle request
task.post('/add', express_validator_1.body('title').isString(), express_validator_1.body('userId').isInt().toInt(), express_validator_1.body('listId').isInt().toInt(), add_1.default);
task.put('/u0pdate/:id', express_validator_1.body('title').isString(), express_validator_1.body('userId').isInt().toInt(), express_validator_1.body('listId').isInt().toInt(), update_1.default);
// get task by id
task.get('/:id', get_1.default);
// soft delete task by id
task.put('/delete/:id', delete_1.default);
exports.default = task;
