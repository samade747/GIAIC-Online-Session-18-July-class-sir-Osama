"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnSiteStudents = exports.getAllStudents = void 0;
// defult export ko imprt krte hwe kisi bi namh se kar skte hain 
const data_1 = __importDefault(require("./data"));
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnSiteStudents = () => {
    const result = data_1.default.filter((student) => student.isOnSiteAllowed);
    return result;
};
exports.getOnSiteStudents = getOnSiteStudents;
const onsiteStudents = (0, exports.getOnSiteStudents)();
console.log(`onsiteStudents: ${onsiteStudents}`);
