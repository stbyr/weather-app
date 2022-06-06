import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    max-width: 70rem;
  }

  p {
    font-size: 1.8rem;
    padding: 0 2.8rem;
    padding-left: min(5%, 2.8rem);
  }
`