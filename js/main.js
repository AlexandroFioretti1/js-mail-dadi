/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */

/*********************************************************************************************************************/
/*********************************************************************************************************************/

/* strumenti usati
Const\let
if\else
function
addElementById
AddEventListener
getElementByID */

/*********************************************************************************************************************/
/*********************************************************************************************************************/

/* creo le Email Autorizzate per il log-in */
const emailAutorizzate = [
  "alex.fioretti@hotmail.it",
  "luca@hotmail.it",
  "fabio@tim.tvb",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
  "AltreEmailAutorizzate@gmail.com",
];
/* chiedo all'utente di inserire la sua email per verificare se è autorizzata */
function checkEmail() {
  const emailInput = document.getElementById("email-input");
  const resultMessage = document.getElementById("result-message");
  const userEmail = emailInput.value;
  /* vedo il risultato booleano se è vero o falso e assegno una risposta in base all'esito */
  if (emailAutorizzate.includes(userEmail)) {
    resultMessage.innerText = `L'email ${userEmail} è autorizzata ad accedere.`;
  } else {
    resultMessage.innerText = `L'email ${userEmail} non è autorizzata ad accedere.`;
  }
}
/* chiusura della "function" */

// Aggiunge l'evento click al bottone per verificare l'email se è corretta
const checkEmailButton = document.getElementById("check-email-button");
checkEmailButton.addEventListener("click", checkEmail);
