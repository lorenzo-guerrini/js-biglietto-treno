// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) .
// va applicato uno sconto del 20% per i minorenni.
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function priceCalculator() {
    const nKm = parseInt(prompt("Quanti km vuoi percorrere?"));
    const eta = parseInt(prompt("Quanti anni ha il passeggero?"));

    if (isNaN(nKm) || isNaN(eta)) {
        document.getElementById("output").innerHTML = "Uno dei valori da te inseriti è scorretto. Ricomincia da capo."

    } else {
        let prezzo = nKm * 0.21;

        if (eta < 18) {
            prezzo -= prezzo * 20 / 100;
        }

        if (eta >= 65) {
            prezzo -= prezzo * 40 / 100;
        }

        prezzo = (Math.round(prezzo * 100) / 100).toFixed(2);

        document.getElementById("price-container").style.display = "block";
        document.getElementById("output").innerHTML = prezzo + "€";
    }
}