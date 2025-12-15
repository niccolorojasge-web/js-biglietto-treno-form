1 / SELEZIONO TUTTI GLI ELEMENTI DI PAGINA RELATIVI AI CAMPI const tabName -[locument.getElementByld("tab-name");
const tabofferta = document - getElementyId("tab-offerta");
const tabcarrozza =document.getElementById("tab-carrozza"); const tabp - document.getElementById("tab-cp");
const tabcosto = document.gêtElementById("tab-costo");
const nameField = document.getElementById("user-name");
const courseField
document.getElementyId(" course");
const choiceField documentgetElementyId("choice"); const buttonactive - document. getlementeyta("button":
¡/RICHIAMO FORM DA HTML -.. SELEZIONO IL FORM DI RIFERIMENTO
const form = document.queryselector"form")
console.log("form inviato")
    / NICHIAMO TABELLA
const table = document.getElementById("table-info")
//RICHIAMO BOTTONE DI RESET
const.buttonReset - document.getElementById("reset")
//ELABORAZOINE
form.addEventListener("submit", (event) →> (
    event.preventdefault() :
//CALCOLO LA-TARIFFA
const prezzore
0.21;
const prezzokm - 0.21;
J / INIZIALIZZAZIONE COSTANTI PER CONDIZICNE
Inet risultato;
let trattaint = parseInt(courseField.value);//CONVERSICHE
Let prèzzotrattatot - trattaint • prezzokm;
Let messaggio; //CARD FICACOLO SCONTO
NERE ICO FTA" E CALCOLO SCONTO
LISE ISER
if
MINORENNE(SCONTO_265)
        (choiceField.value → "minor")(
            Vapplica sconto del 20 % const prezzoscontato - prezzoTrattaTot * 0.80;
/risultato = il costo del tuo biglietto è scontato del 20
messaggio
"sconto 20%";
Ing(prezzoscontato
"euro")
OVER ES(SCONTO
462)
    (choiceField.value —- "major+") {
    const prezzoscontato
    prezzoTrattaTot *
        0.60;
    sessaggio
il costo del tuo tiglietto e
    "sconto 40%"
    Sdantano
    contato
    essargio
    "Biglietto standard";
