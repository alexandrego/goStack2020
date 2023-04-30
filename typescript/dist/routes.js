"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const CreateUser_1 = __importDefault(require("./services/CreateUser"));
//string, numv=ber, boolean, object, Array
// interfaces
function helloWorld(req, res) {
    const user = (0, CreateUser_1.default)({
        email: 'alexandre@rocketseat.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'Javascript', experience: 100 },
        ],
    });
    return res.json({ message: 'Alexandre Gonçalves' });
}
exports.helloWorld = helloWorld;
