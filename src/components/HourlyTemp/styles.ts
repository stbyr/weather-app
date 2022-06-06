import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    margin: 5rem 0 0;
    padding: 0 2rem 0 0.7rem;
    overflow: scroll;

    @media screen and (min-width: 730px) {
      padding: 0 2rem;
    }

    @media screen and (min-width: 2222px) {
      justify-content: center;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1rem;
      position: relative;
    }

    p {
      white-space: nowrap;
      padding: 1rem;
      font-size: 1.8rem;
      margin: 1rem 0;
    } 

    .pop-hourly {
      color: #78e2ff;
      font-size: 1.4rem;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 5rem;
    }
`