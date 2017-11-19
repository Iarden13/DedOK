window.onload = function(){

var randButton = document.getElementById("randomBUTTON");
var log = document.getElementById("log");
var mas =[];
var drop =0;
var kol_rand = 0;

for( i =0;i<11;i++){
    mas[i] = document.getElementById("pict"+i);
}

var veight  = [0.3, 0.2, 0.1, 0.1, 0.07, 0.07, 0.05, 0.05, 0.03, 0.02, 0.01];

function Choose(probs) {
    var total = 0;
    for (i =0; i<probs.length; i++) {
        total += probs[i];
    }

    var randomPoint = (1-Math.random()) * (total);       
      
    for (i = 0; i < probs.length; i++) {
        if (randomPoint <= probs[i])
            return i;
        else
            randomPoint -= probs[i];
    }    
    return 0;
}

function rand(){

    mas[drop].style.display = "none";   
    drop = Choose(veight);
    mas[drop].style.display = "block";

    kol_rand++;    
    randButton.innerHTML  = "Random " +kol_rand;
    
    log.innerText = log.innerText
        +"\n"
        +"Drop №"+kol_rand
        +": "+mas[drop].id[4]
        +(mas[drop].id[5]==undefined?"":mas[drop].id[5]);
}

randButton.addEventListener('click', rand);

}