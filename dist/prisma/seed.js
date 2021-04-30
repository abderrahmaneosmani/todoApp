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
const users_1 = require("./users");
const client_1 = require("@prisma/client");
//create new instance of prisma
const prisma = new client_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let user of users_1.users) {
            yield prisma.user.create({
                data: user,
            });
        }
    });
}
createUser().catch((e) => {
    console.log(e);
    process.exit(1);
});
createUser().finally(() => {
    prisma.$disconnect();
});
