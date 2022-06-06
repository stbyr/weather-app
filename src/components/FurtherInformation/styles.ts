import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70rem;
  margin: 0 auto;

  > div {
    width: 100%;
    margin: 0.4rem 2.8rem 6.5rem;
    margin-left: min(5%, 2.8rem);
  }

  p {
    font-size: 2.7rem;
    margin: 0;
  }
`