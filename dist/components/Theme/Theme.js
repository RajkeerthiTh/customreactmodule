"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
var core_1 = require("@material-ui/core");
var theme_json_1 = __importDefault(require("./theme.json"));
// When updating the theme colors also update its respective color from 
// style/colors.scss
exports.Theme = (0, core_1.createTheme)(theme_json_1.default);
