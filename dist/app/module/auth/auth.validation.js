"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: "You must have email" }),
    password: zod_1.z.string({ required_error: "password is required" })
});
exports.AuthValidation = {
    loginValidationSchema
};
