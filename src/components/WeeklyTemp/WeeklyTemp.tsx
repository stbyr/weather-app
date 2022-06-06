import React from 'react';
import * as S from './styles'

type Props = { 
    timezoneOffset: number;
    weeklyData: {
        dt: number;
        icon: string;
        pop: number;
        tempDay: number;
        tempNight: number;
    }[] 
}

const WeeklyTemp: React.FC<Props> = ({ weeklyData, timezoneOffset }) => {
    const getWeekday = (timestamp: number) => {
        const days = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
        const date = new Date(timestamp * 1000);
        return days[date.getUTCDay()]
      }
    
      const precipitationInRoundedPercentage = (pop: number) => {
        return Math.round((pop * 100) / 10) * 10
      }

    return (
        <S.Wrapper>
            {weeklyData.map((weekly) => (
                <div key={weekly.dt}>
                    <S.Weekday>{getWeekday(weekly.dt)}</S.Weekday>
                    <S.Icon src={`http://openweathermap.org/img/wn/${weekly.icon}@2x.png`} alt ="icon" height={40} width={40} />
                    <S.Pop>{precipitationInRoundedPercentage(weekly.pop) ? `${precipitationInRoundedPercentage(weekly.pop)} %` : null}</S.Pop>
                    <S.TempDay>{Math.round(weekly.tempDay)}</S.TempDay>
                    <S.TempNight>{Math.round(weekly.tempNight)}</S.TempNight>
                </div>
            ))}
        </S.Wrapper>
    )
}

export default WeeklyTemp