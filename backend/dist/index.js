"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// declare a route with a response
app.get('/', (req, res) => {
    res.send("Server running");
});
// start the server
app.listen(8081, () => {
    console.log(`server running : http://localhost:8081`);
});
//# sourceMappingURL=index.js.map