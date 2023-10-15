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
      info: "Entrada Free até as 20hs, Até 21hs e R$15 e após as 22hs , 20 R$",
      description:
        "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      time: "Horário de funcionamento: 19:00 - 01h",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares com Funk e Dj",
      Bairro: "Cidade dos Funcionarios",
    },
    {
      title: "Bulls Beer House. ( Aldeota )",
      description: "Programação: Rock, chopp, burguer, karoakê e +",
      time: "Horário de funcionamento: 19:00 - 02h",
      info: "Informações adicionais ",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Aldeota",
    },
    {
      title: "DonkeyHead Aldeota ",
      description: "Programação: Os Analógicos e Banda Altos Versos",
      time: "Horário de funcionamento: 17:00 - 1h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Aldeota",
    },
    {
      title: "Samba do Vila",
      description:
        "Programação: A partir das 19h: Mesura | Samba Geral | DJ Justa",
      time: "Horário de funcionamento: 19:00 - 03h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Samba e Pagode",
      Bairro: "Aldeota",
    },
    {
      title: "Q'D' ELAS",
      description: "Programação: 20h Naiara Ferrer 0h Os Brothers",
      time: "Horário de funcionamento: 19:00 - 03h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      categoria: "Lugares Familia e Amigos",
      Bairro: "Cidade dos Funcionarios",
    },
    {
      title: "Mauá Bar e Cozinha ",
      description: "Programação: 20h Daniel Queiroz",
      time: "Horário de funcionamento: 17:00 - 1h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Aldeota",
    },
    {
      title: "Samba Café",
      description:
        "Programação: Samba % Love",
      time: "Horário de funcionamento: 19:00 - 02h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Samba e Pagode",
      Bairro: "Aldeota",
    },
    {
      title: "Tatu Bola",
      description: "Programação: Deixa de Caô - Belinho",
      time: "Horário de funcionamento: 19:00 - 03h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Aldeota",
    },
    {
      title: "Reggae Club ",
      description: "Programação: Loucos por Reggae",
      time: "Horário de funcionamento: 17:00 - 4h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Aldeota",
    },
    {
      title: "Paraiba Bar",
      description:
        "Programação: Sabadinho com Edylane Oliveira",
      time: "Horário de funcionamento: 19:00 - 02h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares Familia e Amigos",
      Bairro: "Benfica",
    },
    {
      title: "Kosmika",
      description: "Programação: Show do Diego Vaz, Dj Junior | Dj Heverton e muito mais",
      time: "Horário de funcionamento: 19:00 - 04h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares com Funk e Dj",
      Bairro: "Meireles",
    },
    {
      title: "Living",
      description: "Programação: Fica a Vontade com Malira | Banda Live | Bruno Hedy",
      time: "Horário de funcionamento: 17:00 - 1h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Lugares com Funk e Dj",
      Bairro: "Aldeota",
    },
  ],
  "2023-10-15": [
    {
      title: "Restaurante Raiz",
      description: "Comida tipica Brasileira",
      time: "12:00hs - 2h",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Familia",
      Bairro: "Edson Queiroz",
    },
    {
      title: "Estamos Cadastrando a programação de Domingo",
      description: "Estamos Cadastrando a programação de Domingo",
      time: "Estamos Cadastrando a programação de Domingo",
      info: "Tipo malhação só que também de férias com o ex! Se o babado não chegar até vc, vc é o babado! Vamos? Programação:Lola Garcia e DJ Luiz Neto",
      endereco: "R. Antônio de Castro, 530 - Cidade dos Funcionários, Fortaleza - CE, 60823-005",
      instagram: "https://www.instagram.com/budegadoraul/",
      category: "Familia",
      Bairro: "Cidade dos Funcionarios",
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
