// collego il bottone di generazione biglietto

const elementBtnGenerator = document.getElementById('btn_generation');

// collego la funzione al click del bottone per generare il biglietto

elementBtnGenerator.addEventListener("click", function() {

        //funzione calcolo prezzo biglietto

// prendere età utente

const elementUserName = document.getElementById("user_name").value;

console.log(`il nome utente è ${elementUserName}`);

// prendere km da fare

let elementUserKm = 0;

elementUserKm = document.getElementById("km_to_go").value;

console.log(`i km inseriti sono ${elementUserKm}`);

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

// scrivo nome passeggero sul biglietto

document.getElementById('user_ticket_name').innerHTML = elementUserName;

// scrivo lo sconto sul biglietto

if (elementUserAge < 18) {
    document.getElementById('ticket_discount').innerHTML = 'Sconto <br> Minorenne';
} else if (elementUserAge > 65) {
    document.getElementById('ticket_discount').innerHTML = 'Sconto <br> Over-65';
} else {
    document.getElementById('ticket_discount').innerHTML = 'Prezzo <br> Intero';
}

// scrivo il numero di carrozza sul biglietto

let rnd_number = (Math.floor(Math.random() * 100) + 1);

document.getElementById('carriage_number').innerHTML = rnd_number;

// scrivo codice cp sul biglietto

let rnd_cp_number = (Math.floor(Math.random() * 100000) + 1).toFixed();

document.getElementById('cp_number').innerHTML = rnd_cp_number;

// scrivo il prezzo sul biglietto

document.getElementById('ticket_final_price').innerHTML = `${final_price.toFixed(2)} &euro;`;

// mostro a schermo il biglietto compilato
if (elementUserKm != 0) {
document.querySelector('.ticket_generator').classList.add('d-block');
}
}
);


// collego il bottone di cancellazione biglietto

const elementBtnCancel = document.getElementById('btn_cancel');

// collego la funzione al click del bottone per cancellare il biglietto

elementBtnCancel.addEventListener("click", function() {
    document.querySelector('.ticket_generator').classList.remove('d-block');
    document.getElementById('my_form').reset();
    
    }
);