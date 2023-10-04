#~~~~ Quiz App

Este é um aplicativo de quiz simples desenvolvido em React. O aplicativo permite que os usuários respondam a várias perguntas e acumulem pontos. Ele também possui uma tela de início, uma tela de fim e recursos de progresso.

## Funcionalidades

- Tela de início: Os usuários veem uma tela de início que mostra o número de perguntas disponíveis e um botão para começar o quiz.

- Tela de carregamento: Durante o carregamento das perguntas do servidor, os usuários veem uma tela de carregamento.

- Tela de erro: Se houver um erro ao carregar as perguntas, os usuários veem uma tela de erro.

- Tela ativa: Quando o quiz está em andamento, os usuários veem a pergunta atual, um medidor de progresso e um botão para avançar para a próxima pergunta.

- Tela de fim: Após responder a todas as perguntas, os usuários veem uma tela de fim que mostra a pontuação alcançada, o número máximo de pontos possíveis e a pontuação mais alta alcançada.

## Estrutura do Código

- O aplicativo utiliza o React e o hook `useReducer` para gerenciar o estado.

- As perguntas são carregadas de um servidor local através de uma chamada de API.

- O estado do aplicativo é gerenciado usando o `useReducer` do React.

- O aplicativo consiste em vários componentes React, incluindo Header, Main, Loader, Error, StartScreen, Question, NextButton, Progress e FinishScreen.

## Como Usar

1. Clone este repositório para o seu ambiente local.

2. Certifique-se de ter o Node.js instalado em seu sistema.

3. No diretório raiz do projeto, execute `npm install` para instalar as dependências.

4. Execute `npm start` para iniciar o aplicativo em seu navegador.

5. Execute `npm run server` para iniciar a API local.

6. Você verá a tela de início do quiz. Clique no botão "Começar" para iniciar o quiz.

7. Responda às perguntas e avance para a próxima usando o botão "Próxima".

8. Após responder a todas as perguntas, você verá a tela de fim com sua pontuação final.

## Licença

Este projeto é distribuído sob a [licença MIT](LICENSE.txt).

---
