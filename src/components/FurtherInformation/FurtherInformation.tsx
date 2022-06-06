import React from 'react'
import * as S from './styles'
import FurtherInformationRow from './components'

type Props = {
    timezoneOffset: number;
    sunrise: number;
    sunset: number;
    rain: number;
    humidity: number;
    wind: number;
    feelsLike: number;
    clouds: number;
    pressure: number;
    visibility: number;
    uvi: number;
}

const FurtherInformation: React.FC<Props> = ({ timezoneOffset, sunrise, sunset, rain, humidity, wind, feelsLike, clouds, pressure, visibility, uvi }) => {
    const getTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const UTCHours = date.getUTCHours();
        const hours = UTCHours + (timezoneOffset / 3600);

        let correctHours;
        hours < 10 ? correctHours = `0${hours}` : correctHours = hours
        const minutes = date.getMinutes();
        let correctMins;
        minutes < 10 ? correctMins = `0${minutes}` : correctMins = minutes
        return `${correctHours}:${correctMins}`
    }
    
    return (
        <S.Wrapper>
            <div>
                <FurtherInformationRow 
                    headline1="Sonnenaufgang"
                    content1={getTime(sunrise)}
                    headline2="Sonnenuntergang"
                    content2={getTime(sunset)} 
                />

                <FurtherInformationRow 
                    headline1="Regen"
                    content1={`${rain * 100} %`}
                    headline2="Feuchtigkeit"
                    content2={`${humidity} %`} 
                />

                <FurtherInformationRow 
                    headline1="Wind"
                    content1={`${Math.round(wind * 3.6)} km/h`}
                    headline2="Gefühlt"
                    content2={`${Math.round(feelsLike)} %`} 
                />

                <FurtherInformationRow 
                    headline1="Wolken"
                    content1={`${clouds} %`}
                    headline2="Luftdruck"
                    content2={`${pressure} hPa`} 
                />

                <FurtherInformationRow 
                    headline1="Sichtweite"
                    content1={`${visibility / 1000} km`}
                    headline2="UV-Index"
                    content2={uvi} 
                />
            </div>
        </S.Wrapper>
    )
}

export default FurtherInformation