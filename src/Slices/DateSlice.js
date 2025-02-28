import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ConvertToCelsius,
  getCurrentForecast,
  getPositionByCity,
} from "../service/getData";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const weatherData = createAsyncThunk(
  "data/weatherData",
  async function (city) {
    const positionObj = !city
      ? await getPosition()
      : await getPositionByCity(city);
    // console.log(positionObj);
    const position = {
      long: !city ? positionObj.coords.longitude : positionObj.long,
      lat: !city ? positionObj.coords.latitude : positionObj.lat,
    };

    const weatherObj = await getCurrentForecast(position.lat, position.long);

    return weatherObj;
  }
);

const initialState = {
  status: "idle",
  location: "",
  temp: {},
  wind: {},
  description: "",
  forecast: [],
  image: "https://openweathermap.org/img/wn/02n.png",
  err: "",
};

const dateSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(weatherData.pending, (state) => {
        state.status = "isLoading";
      })
      .addCase(weatherData.fulfilled, (state, action) => {
        //for current day only

        state.status = "idel";
        state.location = action.payload.location;

        state.temp = {
          main: ConvertToCelsius(action.payload.list[0].main.temp),
          min: ConvertToCelsius(action.payload.list[0].main.temp_min),
          max: ConvertToCelsius(action.payload.list[0].main.temp_max),
          feels: ConvertToCelsius(action.payload.list[0].main.feels_like),
        };

        state.wind = action.payload.list[0].wind;

        state.description =
          String(action.payload.list[0].weather[0].description)
            .charAt(0)
            .toUpperCase() +
          String(action.payload.list[0].weather[0].description).slice(1);
        state.image = `https://openweathermap.org/img/wn/${action.payload.list[0].weather[0].icon}.png`;

        //  forcast
        action.payload.list.shift();
        // console.log(action.payload.list);
        state.forecast = action.payload.list;
      })
      .addCase(weatherData.rejected, (state, action) => {
        state.err = action.error.message;
        state.status = "error";
      }),
});

export default dateSlice.reducer;
