"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// create a basic express api
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 4000;
// cors
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('this is response 1');
});
app.get('/a', (req, res) => {
    res.send('this is response 2');
});
app.get('/b', (req, res) => {
    res.send('this is response 3');
});
app.get('/c', (req, res) => {
    res.send('this is response 4');
});
app.get('/d', (req, res) => {
    res.send('this is response 5');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
