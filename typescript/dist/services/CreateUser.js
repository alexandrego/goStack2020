"use strict";
/**
 * Para criar: name, email, password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name, email, password }) {
    const user = {
        name,
        email,
        password,
    };
    return user;
}
exports.default = createUser;
