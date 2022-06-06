import styled from "styled-components";
const bgImage = require("../assets/images/elcarito-main.jpg");

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  position: relative;
  background-image: url("${bgImage}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Headline = styled.div`
  margin-bottom: 6rem;
`;
