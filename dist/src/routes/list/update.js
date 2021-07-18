"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_validator_1 = require("express-validator");
const prisma = new client_1.PrismaClient();
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get id form req params
        const id = Number(req.params.id);
        // if params is not a number send status code 404
        if (Number(isNaN(id)) === 1) {
            res.statusCode = 404;
        }
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // create constructor for list
        const { title, userId, taskId } = req.body;
        //create list object
        const data = {
            title,
            userId,
            taskId,
        };
        // update  list in database
        const updateList = yield prisma.list.update({
            where: {
                id: id,
            },
            data,
        });
        // send response to client
        res.status(200).json({ user: updateList });
        // send error to client
    }
    catch (error) {
        res.json({ errors: error });
    }
});
