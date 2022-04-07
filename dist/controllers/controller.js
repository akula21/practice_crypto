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
const getSomething = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(400).json({ message: 'Lol' });
});
const getApis = () => __awaiter(void 0, void 0, void 0, function* () {
    // const getApi = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR';
    // const response = await fetch(getApi);
    // const myJson = await response.json();
    // console.log(myJson.coins.length);
});
getApis();
exports.default = { getSomething };
