// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let player1 = Math.floor(Math.random() * 6 +1);
let player2 = Math.floor(Math.random() * 6);
alert (' il giocatore Umano ha estratto ' +  player1);
alert (' il computer ha estratto ' +  player2);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (player1 > player2) {
    alert('Vince il giocatore umano')
}
else if (player1 < player2) {
    alert('Vince il computer')
}
else {
    alert('Pareggio ')
}