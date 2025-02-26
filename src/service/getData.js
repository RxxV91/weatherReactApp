/* eslint-disable no-unused-vars */

const APIKEY = "1932843d0133b75ba903853ca32cc636";
const URL = "https://pro.openweathermap.org/data/2.5/forecast/?";

const APIKEY_geo = "4fb0ade48dd84cdfab72fd9ab6f984dd";
const URL_geo = "https://api.geoapify.com/v1/geocode/search?text=";

export async function getPositionByCity(city) {
  try {
    const res = await fetch(
      `${URL_geo}${city}&format=json&apiKey=${APIKEY_geo}`
    );
    const data = await res.json();

    const postition = {
      lat: data.results[0].lat,
      long: data.results[0].lon,
    };

    return postition;
  } catch (error) {
    console.error(error);
  }
}

export function ConvertToCelsius(temp) {
  return (temp - 273.15).toFixed(1);
}

export function getNumOfDay(day) {
  let num = 0;
  const date = new Date();
  const value = date.getDay() + day + 1;
  console.log(value);
  switch (true) {
    case value > 13:
      return (num = value - 14);
    case value > 6:
      return (num = value - 7);

    default:
      return (num = value);
  }
}

/*
// For showing only current weather
export async function getCurrentForecast(lat, lon) {
  const res = await fetch(`${URL}lat=${lat}&lon=${lon}&appid=${APIKEY}`);
  const data = await res.json();
  console.log(data);
  const temp = (data.main.temp - 273.15).toFixed(1);
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;
  return { temp, desc, icon };
}
  */

// For forcast weather
export async function getCurrentForecast(lat, lon) {
  const res = await fetch(`${URL}lat=${lat}&lon=${lon}&appid=${APIKEY}`);
  const data = await res.json();
  const obj = { location: data.city.name, list: data.list.slice(0, 14) };
  // console.log(data);
  return obj;
}
