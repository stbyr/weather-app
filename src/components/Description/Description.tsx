import React from 'react';
import Search from '../Search';
import * as S from './styles'

type Props = {
    description: string;
    maxTemp: number;
    descriptionNight: string | undefined;
    tempNight: number;
}

const Description: React.FC<Props> = ({ description, maxTemp, descriptionNight, tempNight }) => {
    return (
        <S.Wrapper>
            <div>
                <p>Heute: {description}. Die Höchsttemperatur wird bei {maxTemp}° liegen. 
                Heute Nacht: {descriptionNight} bei einer Tiefsttemperatur von {tempNight}°.</p>
            </div>
        </S.Wrapper>
    )
}

export default Description