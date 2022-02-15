import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-content: center;
  text-align: center;
  z-index: 1;
  @media (max-width: 1200px) {
  }
`;

export const Container2 = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  text-align: center;
  opacity: 0.5;
`;

export const Card = styled.div`
  background-color: hsl(236, 21%, 26%);
  width: 10%;
  border-radius: 5px;
  margin: 20px;
  color: hsl(345, 95%, 68%);
  box-shadow: 0px 7px 0px -1px hsl(234, 17%, 12%);
  @media (max-width: 1200px) {
    width: 75px;
    height: 75px;
    margin: 0 auto;
  }
`;

export const Datos = styled.p`
  background-color: hsl(236, 21%, 26%);
  font-size: 80px;
  margin: 15px;
  animation: flipInX;
  animation-duration: 1s;
  @media (max-width: 1200px) {
    font-size: 38px;
  }
`;

export const Title = styled.p`
  justify-content: space-around;
  width: 10%;
  margin: 20px;
  font-size: 14px;
  letter-spacing: 5px;
  color: white;
  @media (max-width: 1200px) {
    width: 80px;
    margin: 0 auto;
    font-size: 7px;
    margin-top: 15px;
    letter-spacing: 3px;
  }
`;

export const Media = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-around;
  padding-top: 100px;
  margin: 0 auto;
  background-color: transparent;
`;

export const End = styled.div`
  width: 100%;
  height: 25%;
  position: fixed;
  margin-left: -8px;
  bottom: 0;
  background-image: url("https://res.cloudinary.com/dilwbkj5s/image/upload/v1644697221/Reto%204/pattern-hills_v8qoet.svg");
  background-size: cover;
`;
