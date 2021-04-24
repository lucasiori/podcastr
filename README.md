<p align="center">
  <img src="https://github.com/lucasiori/podcastr/blob/main/public/favicon.png" alt="Homepage" />
  <h1 align="center">Podcastr</h1>
</p>

<p align="center">
  <img src="https://github.com/lucasiori/podcastr/blob/main/.github/screenshot1.png" alt="Homepage" />
  <img src="https://github.com/lucasiori/podcastr/blob/main/.github/screenshot.png" alt="Página do episódio" />
</p>

<p align="center">
  <a href="#sobre">Sobre</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#ferramentas">Ferramentas</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#executando-aplicacao">Executando a aplicação</a>
</p>

<h2 id="sobre">ℹ Sobre</h2>

<p>Projeto desenvolvido durante o evento <strong>Next Level Week 5</strong></p>
<p>O projeto trata-se de uma aplicação onde o usuário consegue ouvir podcasts (especificamente episódios do podcast Faladev, criado pela Rocketseat).</p>
<p>
  A aplicação tem as seguintes funcionalidades:
  <ul>
    <li>Ouvir uma lista de podcasts</li>
    <li>Ouvir um podcast específico</li>
    <li>Loop para ficar ouvindo um podcast específico</li>
    <li>Ouvir podcasts de uma lista aleatóriamente</li>
    <li>Pular para próximo/anterior</li>
    <li>Controle do tempo de reprodução do podcast</li>
  </ul>
</p>

<br />

<h2 id="ferramentas">🛠️ Ferramentas</h2>

<ul>
  <li><a href="https://pt-br.reactjs.org/" target="_blank">React (React JS)</a></li>
  <li><a href="https://nextjs.org/" target="_blank">Next.js</a></li>
  <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
  <li><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
  <li><a href="https://github.com/css-modules/css-modules" target="_blank">CSS Modules</a></li>
  <li><a href="https://github.com/axios/axios" target="_blank">Axios</a></li>
  <li><a href="https://github.com/typicode/json-server" target="_blank">JSON Server</a></li>
</ul>

<br />

<h2 id="executando-aplicacao">✅ Executando a aplicação</h2>

<strong>Requisitos:</strong>
<ul>
  <li>Node.js</li>
  <li>Gerenciador de pacotes: NPM ou Yarn</li>
</ul>

<p>
  Primeiramente, clone o repositório na sua máquina local: <br />
  <code>git clone https://github.com/lucasiori/podcastr</code>
</p>

<p>
  Acesse a pasta do projeto, e no terminal execute o comando para instalar as dependências: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm install</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn</code>
    </li>
  </ul>
</p>

<p>
  Após instaladas as dependências, certifique-se de que a porta <strong>3000</strong> está disponível pois é a porta onde a aplicação será executada,
  e a porta <strong>3333</strong> que será onde executaremos a Fake API para recuperar os dados dos podcasts. <br />
  Para iniciar a o server JSON: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm run server</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn server</code>
    </li>
  </ul>
  <br />
  Para iniciar a aplicação, execute o comando: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm run dev</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn dev</code>
    </li>
  </ul>
</p>
