import React from 'react'
import * as S from './styles'

type Props = {
    headline1: string;
    content1: number | string;
    headline2: string;
    content2: number | string;
}

const FurtherInformationRow: React.FC<Props> = ({ headline1, content1, headline2, content2 }) => {
    return (
        <S.Row>
            <div>
                <S.Headline>{headline1}</S.Headline>
                <p>{content1}</p>
            </div>

            <div>
                <S.Headline>{headline2}</S.Headline>
                <p>{content2}</p>
            </div>
        </S.Row>
    )
}

export default FurtherInformationRow