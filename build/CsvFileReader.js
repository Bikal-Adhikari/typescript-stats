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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = require("./util");
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = fs_1.default
                .readFileSync(this.fileName, { encoding: "utf-8" })
                .split("\n")
                .map((row) => {
                return row.split(",");
            })
                .map((row) => {
                return [
                    (0, util_1.dateStringToDate)(row[0]), //date
                    row[1], //team1
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                ];
            });
        });
    }
}
exports.CsvFileReader = CsvFileReader;
