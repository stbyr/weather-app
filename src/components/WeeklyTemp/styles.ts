import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0.5rem auto 0.7rem;
  padding-left: min(5%, 2.8rem);
  max-width: 70rem;

  div {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
    grid-auto-rows: 40px;
    align-items: center;
  } 
`

export const Weekday = styled.div`
  font-size: 1.8rem;
  margin: 0;
  justify-self: start;
  color: #fff;
`

export const Pop = styled.p`
  color: #78e2ff;
  font-size: 1.4rem;
  justify-self: start;
`

export const TempDay = styled.p`
  font-size: 1.8rem;
  margin: 0;
  justify-self: end;
`

export const TempNight = styled.p`
  color: #d3d7e3;
  font-size: 1.8rem;
  justify-self: center;
  margin: 0;
`

export const Icon = styled.img`
  justify-self: end;
  margin: 0 1rem 0 0;
`