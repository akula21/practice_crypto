import {Request, Response} from "express";
import fetch from 'cross-fetch';
import axios from 'axios';

const getSomething = async (req: Request, res: Response) => {
    return res.status(400).json({message: 'Lol'});
};

const getApis = async () => {

    // const getApi = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR';
    // const response = await fetch(getApi);
    // const myJson = await response.json();
    // console.log(myJson.coins);

    // const getApi2 = 'https://api.coinpaprika.com/v1/coins?skip=0&limit=20&currency=EUR';
    // const response = await fetch(getApi2);
    // const myJson = await response.json();
    // console.log(myJson);

    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': '79c997cd-de91-497c-8154-b277f17f92a7',
        },
    });
    const myJson = await response.data;
    console.log(myJson);


};


getApis();

export default {getSomething};