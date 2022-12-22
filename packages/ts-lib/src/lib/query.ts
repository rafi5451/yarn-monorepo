import axios from 'axios';
import { interval, map } from 'rxjs';

const url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';

const reqInstance = axios.create({
  headers: {
    // Authorization: `Bearer ${NaN}`,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  }
});

export const fetchSomeData = () => reqInstance.get(url)


export const obs_v7_$ = interval(1000).pipe(
  map(num => "•".repeat(Math.floor(num)))
)
