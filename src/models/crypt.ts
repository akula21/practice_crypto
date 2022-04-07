import {db} from "../db";
import {Crypts} from "../types/crypts";
import { OkPacket } from "mysql2";


export const create = (crypto: Crypts, callback: Function) => {
    const queryString = "INSERT INTO Crypts (cryptocurrencyName) VALUES (?)";

    db.query(
        queryString,
        [crypto.cryptocurrencyName],
        (err, result) => {
            if (err) {callback(err);
            }

            const insertID = (<OkPacket> result).insertId;

            callback(null, insertID);
        }
    );
};
