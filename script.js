@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Ubuntu&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Roboto&family=Ubuntu&display=swap');

/* Id's */
body {
  background-color: rgb(236 , 236 , 236);
}

header {
  margin-left: 37%;
}

main {
  margin-left: 35%;
}

ol {
  display: inline-block;
  margin: 5px 0;
  padding-left: 0;
  list-style: none;
}

button {
  font-family: Roboto, sans-serif;
}

p {
  font-family: Lato, sans-serif;
  font-weight: 800;
  font-size: larger;
  margin-top: 5px;
}

#titulo {
  font-family: Ubuntu, sans-serif;
  margin-bottom: 0;
}

#sidenav {
  height: 100%;
  width: 30%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(78 , 129 , 121);
  overflow-x: hidden;
  box-shadow: 0 0 5px 5px rgba(114 , 114 , 114 , 0.404);
}

#topSideMenu {
  background: white;
  width: 100%;
  top: 0;
  padding: 20px 30px 10px;
  margin-bottom: 40px;
}

#titleSideMenu {
  margin: 0;
  font-family: Ubuntu, sans-serif;
}

/* Menu do Input -- Início */
#menuDoInput {
  margin-left: 20px;
}

#texto-tarefa {
  display: block;
  border-radius: 50px;
  margin-bottom: 15px;
  width: 90%;
  height: 40px;
  border: 1px solid rgb(250 , 250 , 250);
  box-shadow: 0 2px 4px 1px rgba(114 , 114 , 114 , 0.404);
}

#texto-tarefa:focus {
  border-radius: 0;
  background-color: -internal-light-dark white , rgb(187 , 187 , 187));
  outline-color: white;
  box-shadow: 0 2px 10px 1px rgba(114 , 114 , 114 , 0.76);
}

#texto-tarefa:hover {
  box-shadow: 0 2px 10px 1px rgba(114 , 114 , 114 , 0.76);
  cursor: pointer;
}

#criar-tarefa {
  display: block;
  border-radius: 50px;
  width: 91%;
  height: 45px;
  border: 0;
  background-color: rgb(80 , 21 , 136);
  color: white;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#criar-tarefa:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(62 , 16 , 105);
  cursor: pointer;
  border-radius: 0;
}

#criar-tarefa:active {
  background-color: rgb(80 , 21 , 136);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

/* Menu do Input -- Final */

/* Menu dos Botões -- Início */
#menuBotoes {
  margin-left: 20px;
  margin-top: 20px;
}

#apaga-tudo {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  height: 45px;
  border: 0;
  background-color: rgb(199 , 199 , 199);
  color: black;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#apaga-tudo:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(180 , 180 , 180);
  cursor: pointer;
}

#apaga-tudo:active {
  background-color: rgb(199 , 199 , 199);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

#remover-finalizados {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  margin-left: 10px;
  height: 45px;
  border: 0;
  background-color: rgb(199 , 199 , 199);
  color: black;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#remover-finalizados:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(180 , 180 , 180);
  cursor: pointer;
}

#remover-finalizados:active {
  background-color: rgb(199 , 199 , 199);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

#menuBotoes2 {
  margin-left: 20px;
  margin-top: 20px;
}

#salvar-tarefas {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  height: 45px;
  border: 0;
  background-color: rgb(199 , 199 , 199);
  color: black;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#salvar-tarefas:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(180 , 180 , 180);
  cursor: pointer;
}

#salvar-tarefas:active {
  background-color: rgb(199 , 199 , 199);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

#remover-selecionado {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  margin-left: 10px;
  height: 45px;
  border: 0;
  background-color: rgb(199 , 199 , 199);
  color: black;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#remover-selecionado:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(180 , 180 , 180);
  cursor: pointer;
}

#remover-selecionado:active {
  background-color: rgb(199 , 199 , 199);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

#menuBotoes3 {
  margin-left: 20px;
  margin-top: 20px;
}

#mover-cima {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  height: 45px;
  border: 0;
  background-color: rgb(35 , 105 , 211);
  color: white;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#mover-cima:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(32 , 88 , 173);
  cursor: pointer;
  border-radius: 0;
}

#mover-cima:active {
  background-color: rgb(35 , 105 , 211);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

#mover-baixo {
  display: inline-block;
  border-radius: 50px;
  width: 43%;
  margin-left: 10px;
  height: 45px;
  border: 0;
  background-color: rgb(160 , 9 , 67);
  color: white;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
}

#mover-baixo:hover {
  box-shadow: 0 2px 10px 1px rgba(49 , 49 , 49 , 0.76);
  background-color: rgb(119 , 6 , 49);
  cursor: pointer;
  border-radius: 0;
}

#mover-baixo:active {
  background-color: rgb(160 , 9 , 67);
  box-shadow: 0 0 0 0 rgba(151 , 151 , 151 , 0.76);
  font-size: 13px;
}

/* Classes */
.tarefa {
  font-family: Roboto, sans-serif;
  padding: 15px;
  margin: 12px 10px;
  background-color: white;
  max-width: 95%;
  box-shadow: 0 2px 4px 1px rgba(73 , 73 , 73 , 0.61);
  min-width: 55vw;
}

.selected {
  background-color: grey;
}

.tarefa:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.fas {
  margin-right: 7px;
}