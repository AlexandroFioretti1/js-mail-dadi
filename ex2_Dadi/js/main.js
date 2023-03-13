/* Gioco dei dadi
Generare un numero random da 1 a 6 sia per il giocatore sia per il computer.
Stabilire il vincitore  in base a chi fa il punteggio più alto.
*/

/***************************************************************************************************************/
/***************************************************************************************************************/

/*
STRUMENTI USATI
CONST\LET
CONSOLE.LOG
IF\ELSE
DOCUMENT.WRITE
*/

/***************************************************************************************************************/
/***************************************************************************************************************/

// Generare un numero casuale da 1 a 6 per il giocatore(persona che gioca)
const giocatore = Math.floor(Math.random() * 6) + 1;

// Generazione di un numero casuale da 1 a 6 per il computer
const computer = Math.floor(Math.random() * 6) + 1;

// Stampa dei numeri generati
console.log("Giocatore: " + giocatore);
console.log("Computer: " + computer);
/* stampo i risultati della partita per definire il vincitore a schermo */
document.write("Giocatore: " + giocatore + "<br>");
document.write("Computer: " + computer + "<br>");
resultEL = document.getElementById("risultato");

// Verifico chi ha vinto tra il giocatore e il computer
/* ha vinto il giocatore */
if (giocatore > computer) {
  console.log("Hai vinto 1.000.000 di Euro!!!");
  resultEL.innerHTML = "Hai vinto 1.000.000 di Euro!!!";

  /* ha vinto il computer */
} else if (computer > giocatore) {
  console.log("Il computer ha vinto!");
  resultEL.innerHTML = "Non hai vinto!";

  /* la partita è stata pareggiata */
} else {
  console.log("Pareggio!");
  resultEL.innerHTML = "Pareggio!";
}
