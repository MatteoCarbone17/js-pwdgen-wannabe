let nomeUtente = prompt('Come ti chiami ?');
console.log (nomeUtente);


let cognomeUtente = prompt('Qual è il tuo cognome ?');
console.log (cognomeUtente);

let nomeCompleto = nomeUtente + cognomeUtente ;
console.log (nomeCompleto);

let colorePreferitoUtente = prompt('Qual è il tuo colore preferito ?');
console.log (colorePreferitoUtente);



document.getElementById('codicesegreto') .innerHTML =`il tuo codice segreto per accedere a dati ancor piu segreti del codice \' segreto \' è : ${nomeCompleto}${colorePreferitoUtente}22` ;




let year ;
year = 2022 ;


let ageUser = prompt("in che anno sei nato?") ;
console.log (ageUser);

completeAge = year - ageUser ;
console.log (completeAge);


document.getElementById('codicemoltosegreto') .innerHTML =`il tuo codice segreto per accedere a dati ancor piu segreti del codice \' segreto \' è : ${completeAge}${nomeCompleto}22${colorePreferitoUtente}` ;


