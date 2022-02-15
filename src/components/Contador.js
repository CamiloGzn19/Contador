import React, { useEffect, useState } from "react";
import {
  Container,
  Container2,
  Card,
  Datos,
  Title,
  Media,
  End,
} from "../styles/style";
import "../styles/style.css";
import "animate.css";

export const Contador = () => {
  const [Dias, setDias] = useState(14);
  const [Horas, setHoras] = useState(24);
  const [Minutos, setMinutos] = useState(60);
  const [Segundos, setSegundos] = useState(60);

  const IntervaloSegundos = setInterval(() => {
    if (Segundos > 1) {
      setSegundos(Segundos - 1);
      clearInterval(IntervaloSegundos);
    } else if (Segundos == 1) {
      setSegundos(60);
      clearInterval(IntervaloSegundos);
    }
  }, 1000);

  const IntervaloMinutos = setInterval(() => {
    if (Segundos == 60) {
      setMinutos(Minutos - 1);
      clearInterval(IntervaloMinutos);
    } else if (Minutos == 1) {
      setMinutos(60);
      clearInterval(IntervaloMinutos);
    }
  }, 60000);

  const IntervaloHoras = setInterval(() => {
    if (Minutos == 60) {
      setHoras(Horas - 1);
      clearInterval(IntervaloHoras);
    } else if (Horas == 1) {
      setHoras(60);
      clearInterval(IntervaloHoras);
    }
  }, 3600000);

  const IntervaloDias = setInterval(() => {
    if (Horas == 24) {
      setDias(Dias - 1);
      clearInterval(IntervaloDias);
    } else if (Dias == 0) {
      setDias(14);
      clearInterval(IntervaloDias);
    }
  }, 86400000);

  return (
    <div>
      <h1>WE'RE LAUNCHING SOON</h1>
      <Container>
        <Card>
          <Datos>{Dias}</Datos>
        </Card>
        <Card>
          <Datos>{Horas}</Datos>
        </Card>
        <Card>
          <Datos>{Minutos}</Datos>
        </Card>
        <Card>
          <Datos>{Segundos}</Datos>
        </Card>
      </Container>
      <Container2>
        <Title>DAYS</Title>
        <Title>HOURS</Title>
        <Title>MINUTES</Title>
        <Title>SECONDS</Title>
      </Container2>
      <End>
        <Media>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644697221/Reto%204/icon-facebook_xeq6af.svg" />
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644697221/Reto%204/icon-pinterest_fcsscb.svg" />
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1644697221/Reto%204/icon-instagram_hctndt.svg" />
        </Media>
        <img src="" />
      </End>
    </div>
  );
};
