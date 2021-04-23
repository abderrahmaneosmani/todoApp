"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = express_1.default();
dotenv_1.default.config();
const PORT = process.env.SERVER_PORT;
app.get("/", (req, res) => {
    res.send("hello word");
});
app.listen(PORT, () => console.log(`application running on  ${PORT}`));
