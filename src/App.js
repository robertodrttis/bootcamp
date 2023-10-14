import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Event from "./components/about/Event";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const events = {
  "2023-10-14": [
    {
      title: "Budega do Raul",
      description:
        "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      time: "19:00 - 01h",
    },
    {
      title: "Bulls Beer House. ( Aldeota )",
      description: "Programação: Rock, chopp, burguer, karoakê e +",
      time: "19:00 - 02h",
    },
    {
      title: "DonkeyHead Aldeota ",
      description: "Programação: Os Analógicos e Banda Altos Versos",
      time: "17:00 - 1h",
    },
    {
      title: "Samba do Vila",
      description:
        "Programação: A partir das 19h: Mesura | Samba Geral | DJ Justa",
      time: "19:00 - 03h",
    },
    {
      title: "Q'D' ELAS",
      description: "Programação: 20h Naiara Ferrer 0h Os Brothers",
      time: "19:00 - 03h",
    },
    {
      title: "Mauá Bar e Cozinha ",
      description: "Programação: 20h Daniel Queiroz",
      time: "17:00 - 1h",
    },
    {
      title: "Samba Café",
      description:
        "Programação: Samba % Love",
      time: "19:00 - 02h",
    },
    {
      title: "Tatu Bola",
      description: "Programação: Deixa de Caô - Belinho",
      time: "19:00 - 03h",
    },
    {
      title: "Reggae Club ",
      description: "Programação: Loucos por Reggae",
      time: "17:00 - 4h",
    },
    {
      title: "Paraiba Bar",
      description:
        "Programação: Sabadinho com Edylane Oliveira",
      time: "19:00 - 02h",
    },
    {
      title: "Kosmika",
      description: "Programação: Show do Diego Vaz, Dj Junior | Dj Heverton e muito mais",
      time: "19:00 - 04h",
    },
    {
      title: "Living",
      description: "Programação: Fica a Vontade com Malira | Banda Live | Bruno Hedy",
      time: "17:00 - 1h",
    },
  ],
  "2023-10-15": [
    {
      title: "Restaurante Raiz",
      description: "Comida tipica Brasileira",
      time: "12:00hs - 2h",
    },
    {
      title: "Estamos Cadastrando a programação de Domingo",
      description: "Estamos Cadastrando a programação de Domingo",
      time: "Estamos Cadastrando a programação de Domingo",
    },
  ],
};

const App = () => {
  return (
    <>
      <main className="main">
        <Event events={events} />
        <Home />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
