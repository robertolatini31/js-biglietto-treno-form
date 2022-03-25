
//funzione calcolo prezzo biglietto

// prendere età utente

const elementUserName = document.getElementById("user_name").value;

console.log(`il nome utente è ${elementUserName}`);

// prendere km da fare

const elementUserKm = document.getElementById("km_to_go").value;

console.log(`il nome utente è ${elementUserKm}`);

// prezzo per km 0.21$

const full_price = (elementUserKm * 0.21);

console.log(`prezzo pieno: ${full_price}`);

//prendo età utente

const elementUserAge = document.getElementById("user_age").value;

// imposto lo sconto a zero
let discount = 0; 

if (elementUserAge < 18) {
    discount = ((full_price * 20) / 100);
    // calcolo lo sconto per minorenni
    console.log(`sconto minorenni ottenuto: ${discount}`);
} else if (elementUserAge > 65) {
    discount = ((full_price * 40) / 100);
    // calcolo lo sconto per over 65
    console.log(`sconto over 65 ottenuto: ${discount}`);
}

// calcolo costo finale biglietto
const final_price = (full_price - discount);

console.log(`prezzo biglietto calcolato: ${final_price.toFixed(2)}`);
