import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  position: relative;
`;

export const Form = styled.div<{ searchResults: boolean }>`
  margin: 0;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: ${({ searchResults }) =>
    searchResults ? "0" : "20px"};
  border-bottom-right-radius: ${({ searchResults }) =>
    searchResults ? "0" : "20px"};
  box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.27);

  form input {
    min-width: 32rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.9rem;
    border: 2px solid white;
    background-color: #e0f8ff;
  }

  form input:focus {
    outline: none;
  }
`;

export const ResultList = styled.div`
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 5px 5px 5px -3px rgba(0, 0, 0, 0.27);
  position: absolute;
  width: 100%;
  top: 4.5rem;

  ul {
    padding: 0;
    margin: 0;
  }

  ul a li,
  ul li {
    list-style-type: none;
    font-size: 1.9rem;
    padding: 1rem 2rem;
    color: black;
  }

  ul a:nth-child(2n) li {
    background: #f2fcff;
  }

  ul a li:hover {
    color: darkblue;
    background: #a4e9fc;
  }

  ul a:last-child li {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  ul a:last-child li,
  ul li:last-child {
    border-bottom: none;
  }
`;
