import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;

  h1 {
    font-weight: normal;
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    margin: 0.2rem;
  }

  .currentTemp {
    font-size: 6rem;
    margin: 1rem;
  }
`