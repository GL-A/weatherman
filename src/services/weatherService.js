import axios from "axios";
import { setWeather } from '../ducks/weather';
import store from "../store";

import axios from 'axios';

import {
  formatWeatherData,
  buildUrl
} from "../utils/weatherUtils";


export function getWeather( location ) {
  const weatherPromise = axios.get( buildUrl ).then(response => {
    console.log( response );

    const formattedData = formatWeatherData( response.data );
    console.log( formattedData );

    return formattedData;
  });
}
