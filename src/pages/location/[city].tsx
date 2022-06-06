import React from "react";
import citiesData from "../../../lib/city.list.json";
import { WeatherData } from "../../types/types";
import HourlyTemp from "../../components/HourlyTemp";
import WeeklyTemp from "../../components/WeeklyTemp";
import Description from "../../components/Description";
import FurtherInformation from "../../components/FurtherInformation";
import Intro from "../../components/Intro";
import ArrowBack from "../../components/ArrowBack";
import styled from "styled-components";

const bgRain = require("../../assets/images/valentin-muller-rain.jpg");
const bgThunderstorm = require("../../assets/images/egor-yakushkin-thunderstorm.jpg");
const bgSnow = require("../../assets/images/elinda-gjonomadhi-snow.jpg");
const bgClear = require("../../assets/images/jenna-duffy-bluesky.jpg");
const bgClouds = require("../../assets/images/peyman-farmani-clouds.jpg");

const Wrapper = styled.div<{ weather: string }>`
  position: relative;
  background-image: ${({ weather }) =>
    (weather === "Thunderstorm" && `url('${bgThunderstorm}')`) ||
    ((weather === "Rain" || weather === "Drizzle") && `url('${bgRain}')`) ||
    (weather === "Snow" && `url('${bgSnow}')`) ||
    (weather === "Clear" && `url('${bgClear}')`) ||
    ((weather === "Clouds" || weather === "Atmosphere") &&
      `url('${bgClouds}')`)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

type CityData = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};

type Props = {
  cityData: CityData;
  weatherData: WeatherData;
};

const City: React.FC<Props> = ({ cityData, weatherData }) => {
  const [weatherId, setWeatherId] = React.useState("");

  React.useEffect(() => {
    setWeatherId(weatherData.current.weather[0].main);
  }, []);

  const findItemWithHighestOccurence = () => {
    const nightWeather: string[] = [];
    weatherData &&
      weatherData.hourly
        .filter(
          (hour, index) =>
            index < 25 &&
            new Date(hour.dt * 1000).getUTCHours() +
              weatherData.timezone_offset / 3600 <
              5
        )
        .map((hour) => {
          nightWeather.push(hour.weather[0].description);
        });

    return nightWeather
      .sort(
        (a, b) =>
          nightWeather.filter((v) => v === a).length -
          nightWeather.filter((v) => v === b).length
      )
      .pop();
  };

  console.log(weatherData);

  return (
    <Wrapper weather={weatherId}>
      <ArrowBack />
      <Intro
        cityName={cityData?.name}
        description={weatherData?.current.weather[0].description}
        currentTemp={Math.round(weatherData?.current.temp)}
        dailyMax={Math.round(weatherData?.daily[0].temp.max)}
        dailyMin={Math.round(weatherData?.daily[0].temp.min)}
      />

      <HourlyTemp
        timezoneOffset={weatherData.timezone_offset}
        hourlyData={weatherData.hourly
          .filter((item, index) => index < 25)
          .map((item) => ({
            dt: item.dt,
            pop: item.pop,
            icon: item.weather[0].icon,
            temp: item.temp,
          }))}
      />

      <WeeklyTemp
        timezoneOffset={weatherData.timezone_offset}
        weeklyData={weatherData.daily
          .filter((item, index) => index >= 1)
          .map((item) => ({
            dt: item.dt,
            icon: item.weather[0].icon,
            pop: item.pop,
            tempDay: item.temp.day,
            tempNight: item.temp.night,
          }))}
      />

      <Description
        description={weatherData?.daily[0].weather[0].description}
        maxTemp={Math.round(weatherData?.daily[0].temp.max)}
        descriptionNight={findItemWithHighestOccurence()}
        tempNight={Math.round(weatherData?.daily[0].temp.night)}
      />

      <FurtherInformation
        timezoneOffset={weatherData.timezone_offset}
        sunrise={weatherData?.current.sunrise}
        sunset={weatherData?.current.sunset}
        rain={weatherData?.hourly[0].pop}
        humidity={weatherData?.current.humidity}
        wind={weatherData?.current.wind_speed}
        feelsLike={weatherData?.current.feels_like}
        clouds={weatherData?.current.clouds}
        pressure={weatherData?.current.pressure}
        visibility={weatherData?.current.visibility}
        uvi={weatherData?.current.uvi}
      />
    </Wrapper>
  );
};

export default City;

export async function getServerSideProps(context: any) {
  const getCityData = (slug: string) => {
    const arr = slug.split("-");
    const id = arr[arr.length - 1];
    const cities = citiesData as CityData[];
    const result = cities.find((city) => city.id === Number(id));
    return result;
  };

  const slug = context.params.city;
  const cityData = await getCityData(slug);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData?.coord.lat}&lon=${cityData?.coord.lon}&appid=${process.env.API_KEY}&lang=de&units=metric`
  );
  const weatherData = await response.json();

  return {
    props: {
      cityData,
      weatherData,
    },
  };
}
