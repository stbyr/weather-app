import React from 'react';
import * as S from './styles'
import Image from 'next/image'
import { Loader } from '../../../lib/imageLoader'

type Props = { 
    hourlyData: {
        dt: number;
        temp: number;
        icon: string;
        pop: number;
    }[];
    timezoneOffset: number; 
}

const HourlyTemp: React.FC<Props> = ({ hourlyData, timezoneOffset }) => {
    const precipitationInRoundedPercentage = (pop: number) => {
        return Math.round((pop * 100) / 10) * 10
    }

    const getHours = (timestamp: number, timezoneOffset: number) => {
        const date = new Date(timestamp * 1000);
        const UTCHours = date.getUTCHours();
        return UTCHours + (timezoneOffset / 3600);
    } 

    return (
        <S.Wrapper>
            {hourlyData.map((hourly, index) => {
                if (index === 0) {
                    return (
                        <div key={hourly.dt}>
                            <p>Jetzt</p>
                            <p className="pop-hourly">{precipitationInRoundedPercentage(hourly.pop) ? `${precipitationInRoundedPercentage(hourly.pop)} %` : null}</p>
                            <Image src={`http://openweathermap.org/img/wn/${hourly.icon}@2x.png`} alt ="icon" height={40} width={40} loader={Loader} />
                            <p>{Math.round(hourly.temp)}°</p>
                        </div>
                    )
                } 
                    
                return (
                    <div key={hourly.dt}>
                        <p>{getHours(hourly.dt, timezoneOffset)} Uhr</p>
                        <p className="pop-hourly">{precipitationInRoundedPercentage(hourly.pop) ? `${precipitationInRoundedPercentage(hourly.pop)} %` : null}</p>
                        <Image src={`http://openweathermap.org/img/wn/${hourly.icon}@2x.png`} alt ="icon" height={40} width={40} loader={Loader} />
                        <p>{Math.round(hourly.temp)}°</p>
                    </div>
                )
            })}
        </S.Wrapper>
    )
}

export default HourlyTemp