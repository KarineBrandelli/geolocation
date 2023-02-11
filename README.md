<h1 align="center"> Maps Direction 📍 </h1>

<p align="center">
  Uma aplicação web de um mapa com direções desenvolvido com React.js.
</p>

------
## Como acessar a página?

Você pode acessar a aplicação utilizando um computador, tablet ou celular clicando [nesse](https://maps-wine.vercel.app/) link.

Se você deseja clonar esse repositório em sua máquina, certifique-se que você tem o `nodejs` instalado e em seguida rode o seguinte comando no terminal para a instalação das dependências:

```bash
npm install
```
Para a utilização desta aplicação, é necessário uma chave pessoal de API. A mesma pode ser criada no site da [Google Cloud](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pt-br). Após a criação da chave, é necessário ativar as seguintes API's:

- Maps JavaScript API
- Directions API
- Places API
- Geolocation API
- Geocoding API

A chave criada deve ser inserida no arquivo `Map.jsx` dentro da constante `key`. Após inserir a chave, rode o comando para iniciar a aplicação:

```bash
npm run dev
```

<p align="center">
  <img alt="App Layout" src="https://user-images.githubusercontent.com/108953489/218109718-1d4a68ee-fa5f-46e7-a628-6ac66ead84ca.png" width="80%">
</p>

## Tecnologias utilizadas

Tecnologias utilizadas e suas documentações:

- [Vite](https://vitejs.dev/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [React](https://reactjs.org/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript?hl=pt-br)
