/* Gioco dei dadi
Generare un numero random da 1 a 6 sia per il giocatore sia per il computer.
Stabilire il vincitore  in base a chi fa il punteggio più alto.
*/

// Generare un numero casuale da 1 a 6 per il giocatore(persona che gioca)
const giocatore = Math.floor(Math.random() * 6) + 1;

// Generazione di un numero casuale da 1 a 6 per il computer
const computer = Math.floor(Math.random() * 6) + 1;

// Stampa dei numeri generati
console.log("Giocatore: " + giocatore);
console.log("Computer: " + computer);

// Verifico chi ha vinto tra il giocatore e il computer
/* ha vinto il giocatore */
if (giocatore > computer) {
  console.log("Hai vinto 1.000.000 di Euro!!!");
  /* ha vinto il computer */
} else if (computer > giocatore) {
  console.log("Il computer ha vinto!");
  /* la partita è stata pareggiata */
} else {
  console.log("Pareggio!");
}
