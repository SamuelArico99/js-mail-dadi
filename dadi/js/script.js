// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let player1 = (Math.random() * 6).toFixed(0);
let player2 = (Math.random() * 6).toFixed(0);
alert (' il giocatore Umano ha estratto ' +  player1);
alert (' il computer ha estratto ' +  player2);

if (player1 > player2) {
    alert('Vince il giocatore umano')
}
else if (player1 < player2) {
    alert('Vince il computer')
}
else if (player1 = player2) {
    alert('Pareggio ')
}