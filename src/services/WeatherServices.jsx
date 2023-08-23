import { DateTime } from "luxon";

const API_KEY = '197ce6c4835e806a043abdd234d50c4b'
const API_KEY_ONECALL = '439d4b804bc8187953eb36d2a8c26a02'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    return fetch(url)
        .then((res)=>res.json())
}

const getOnecallWeatherData = (infoType, searchParams) =>{
    const url = new URL('https://openweathermap.org/data/2.5/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY_ONECALL})
    return fetch(url)
        .then((res)=>res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        dt,
        timezone
    } = data

    const {main: details, icon} = weather[0] 

    return {dt, timezone, lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, country, sunrise, sunset, details, icon, weather, speed}
}

const formatForecastWeather = (data) => {
    let {timezone_offset, daily, hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone_offset, 'ccc'),
            temp: d.temp.day.toFixed(),
            icon: d.weather[0].icon
        }
    });
    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone_offset, 'hh:mm a'),
            temp: d.temp.toFixed(),
            icon: d.weather[0].icon
        }
    });

    return {timezone_offset, daily, hourly};
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
    
    const {lat, lon} = formattedCurrentWeather;
    
    const formattedForecastWeather = await getOnecallWeatherData('onecall', {
        lat, lon, units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
}

const formatToLocalTime = (
    secs, 
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs,zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`



export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode}