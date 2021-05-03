"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const task_1 = __importDefault(require("./task"));
const Routes = express_1.Router();
Routes.use('/user', user_1.default);
Routes.use('/task', task_1.default);
exports.default = Routes;
