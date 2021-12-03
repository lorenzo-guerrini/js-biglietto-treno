// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) .
// va applicato uno sconto del 20% per i minorenni.
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function priceCalculator() {
    document.getElementById("price-container").style.display = "block";

    const nKm = parseInt(prompt("Quanti km vuoi percorrere?"));

    if (isNaN(nKm)) {
        document.getElementById("output").innerHTML = "Il valore dei km da te inserito è scorretto. Ricomincia da capo.";
        return;
    }

    const eta = parseInt(prompt("Quanti anni ha il passeggero?"));

    if (isNaN(eta)) {
        document.getElementById("output").innerHTML = "Il valore di età da te inserito è scorretto. Ricomincia da capo.";
        return;
    }

    let prezzo = nKm * 0.21;

    if (eta < 18) {
        prezzo -= prezzo * 20 / 100;
    }

    if (eta >= 65) {
        prezzo -= prezzo * 40 / 100;
    }

    prezzo = (Math.round(prezzo * 100) / 100).toFixed(2);

    document.getElementById("output").innerHTML = prezzo + "€";
}