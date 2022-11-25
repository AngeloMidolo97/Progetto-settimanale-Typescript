"use strict";
class Utente {
    constructor(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(amount) {
        console.log('Hai ricaricato ' + amount + ' euro');
        return this.credito + amount;
    }
    chiamata(minuti) {
        this.numeroChiamate++;
        this.credito -= 0.20 * minuti;
        console.log('Hai effettuato una chiamata di ' + minuti + ' minuti e hai speso ' + minuti * 0.20 + ' euro');
        return this.credito - 0.20 * minuti;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        return this.numeroChiamate;
    }
}
let primo = new Utente(20, 0);
console.log('--------Primo Utente--------');
primo.chiamata(5);
primo.ricarica(20);
primo.chiamata(10);
primo.ricarica(10);
console.log('Credito residuo: ' + primo.numero404() + ' euro');
console.log('Chiamate effettuate: ' + primo.getNumeroChiamate());
console.log('Chiamate azzerate: ' + primo.azzeraChiamate());
document.getElementById('btnRicarica').addEventListener('click', () => {
    document.getElementById('ricarica').innerHTML = 'Nuovo credito ' + primo.ricarica(10).toString() + ' euro';
});
document.getElementById('btnChiama').addEventListener('click', () => {
    document.getElementById('chiama').innerHTML = 'Credito residuo dopo la chiamata: ' + primo.chiamata(5).toString() + ' euro';
});
document.getElementById('btnCredito').addEventListener('click', () => {
    document.getElementById('credito').innerHTML = 'Hai un credito di: ' + primo.numero404().toString() + ' euro';
});
document.getElementById('btnChiamate').addEventListener('click', () => {
    document.getElementById('chiamate').innerHTML = 'Hai effettuato ' + primo.getNumeroChiamate().toString() + ' chiamate';
});
document.getElementById('btnAzzera').addEventListener('click', () => {
    document.getElementById('azzera').innerHTML = 'Chiamate: ' + primo.azzeraChiamate().toString();
});
let secondo = new Utente(40, 0);
console.log('');
console.log('--------Secondo Utente--------');
secondo.chiamata(20);
secondo.ricarica(50);
secondo.chiamata(7);
secondo.ricarica(10);
console.log('Credito residuo: ' + secondo.numero404() + ' euro');
console.log('Chiamate effettuate: ' + secondo.getNumeroChiamate());
console.log('Chiamate azzerate: ' + secondo.azzeraChiamate());
document.getElementById('btnRicaricaS').addEventListener('click', () => {
    document.getElementById('ricaricaS').innerHTML = 'Nuovo credito ' + secondo.ricarica(10).toString() + ' euro';
});
document.getElementById('btnChiamaS').addEventListener('click', () => {
    document.getElementById('chiamaS').innerHTML = 'Credito residuo dopo la chiamata: ' + secondo.chiamata(5).toString() + ' euro';
});
document.getElementById('btnCreditoS').addEventListener('click', () => {
    document.getElementById('creditoS').innerHTML = 'Hai un credito di: ' + secondo.numero404().toString() + ' euro';
});
document.getElementById('btnChiamateS').addEventListener('click', () => {
    document.getElementById('chiamateS').innerHTML = 'Hai effettuato ' + secondo.getNumeroChiamate().toString() + ' chiamate';
});
document.getElementById('btnAzzeraS').addEventListener('click', () => {
    document.getElementById('azzeraS').innerHTML = 'Chiamate: ' + secondo.azzeraChiamate().toString();
});
let terzo = new Utente(40, 0);
console.log('');
console.log('--------Terzo Utente--------');
terzo.chiamata(7);
terzo.ricarica(35);
terzo.chiamata(5);
terzo.ricarica(10);
console.log('Credito residuo: ' + terzo.numero404() + ' euro');
console.log('Chiamate effettuate: ' + terzo.getNumeroChiamate());
console.log('Chiamate azzerate: ' + terzo.azzeraChiamate());
document.getElementById('btnRicaricaT').addEventListener('click', () => {
    document.getElementById('ricaricaT').innerHTML = 'Nuovo credito ' + terzo.ricarica(10).toString() + ' euro';
});
document.getElementById('btnChiamaT').addEventListener('click', () => {
    document.getElementById('chiamaT').innerHTML = 'Credito residuo dopo la chiamata: ' + terzo.chiamata(5).toString() + ' euro';
});
document.getElementById('btnCreditoT').addEventListener('click', () => {
    document.getElementById('creditoT').innerHTML = 'Hai un credito di: ' + terzo.numero404().toString() + ' euro';
});
document.getElementById('btnChiamateT').addEventListener('click', () => {
    document.getElementById('chiamateT').innerHTML = 'Hai effettuato ' + terzo.getNumeroChiamate().toString() + ' chiamate';
});
document.getElementById('btnAzzeraT').addEventListener('click', () => {
    document.getElementById('azzeraT').innerHTML = 'Chiamate: ' + terzo.azzeraChiamate().toString();
});
