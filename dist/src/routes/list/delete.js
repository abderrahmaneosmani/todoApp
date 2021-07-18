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
// initialize  prisma
const prisma = new client_1.PrismaClient();
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get id
        let id = Number(req.params.id);
        // soft delete list
        const data = {
            activeStatus: 'delete',
        };
        // find list by id in database
        const list = yield prisma.list.update({
            where: {
                id: id,
            },
            data,
        });
        //send response to client
        res.status(200).json({ data: 'list deleted successfully ' });
    }
    catch (error) {
        res.status(400).json({ errors: error });
    }
});
