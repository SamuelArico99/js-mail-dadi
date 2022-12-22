// Chiedi all'utente la sua email,
const email = prompt('Inserisci la tua mail , vediamo se sei presente nella lista')
const emailList = ["paolo@mail.com","luca@mail.com","giovanni@mail.com","matteo@mail.com","pino@mail.com"]
// controlla che sia nella lista di chi può accedere
for (let i = 0; i < 5; i++) {
    if (email == emailList[i]) {
        // stampa un messaggio appropriato sull'esito del controllo.
        alert('Si, la tua mail è presente nella lista');
    }
       
}
for (let i = 0; i < 5; i++) {
    if (email != emailList[i]) {
        // stampa un messaggio appropriato sull'esito del controllo.
        alert('No, la tua mail non è presente nella lista');
    }
       
}
