import React from 'react'
import * as S from './styles'

type Props = {
    cityName: string;
    description: string;
    currentTemp: number;
    dailyMax: number;
    dailyMin: number;
}

const Intro: React.FC<Props> = ({ cityName, description, currentTemp, dailyMax, dailyMin }) => {
    return (
        <S.Wrapper>
            <h1>{cityName}</h1>
            <p>{description}</p>
            <p className="currentTemp">{currentTemp}°</p>
            <p>H: {dailyMax}° T: {dailyMin}°</p>
        </S.Wrapper>
    )
}

export default Intro