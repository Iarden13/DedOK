window.onload = function(){
    var randButton = document.getElementById("randomBUTTON");
    var log = document.getElementById("log");
    var drop =0;
    var kol_rand = 0;
    var buttonDIV = document.getElementById("randBUTTONdiv");
    var bod = document.getElementById("pageBody");
    var nextPage = document.getElementsByClassName("page")[0];
    var image = document.getElementsByTagName("img")[0];
    var veight  = [0.3, 0.2, 0.1, 0.1, 0.07, 0.07, 0.05, 0.05, 0.03, 0.02, 0.01];   

    function Choose(probs) {          
        if(!location.href.includes("2")){
            total = 0;
            for (i =0; i<probs.length; i++) {
                total += probs[i];
                randomPoint = (1-Math.random()) * (total);   
            }
        }else{        
        randomPoint = /*(1-Math.random()) **/ (total);           
        }     
        for (i = 0; i < probs.length; i++) {
            if (randomPoint <= probs[i])
                return i;
            else
                randomPoint -= probs[i];
        }    
        return 10;
    }

    function rand(){
        buttonDIV.classList.add("noVisible");  
        setTimeout(fun,1500);
        image.src ="";

        drop = Choose(veight);

        image.src = "pictures/"+drop+".gif";
        image.classList.add("animated","bounceIn");
    
        if(drop == 10){
            bod.classList.add("animated","wobble");
        }

        kol_rand++;    
        randButton.innerHTML  = "Random " +kol_rand;
    
        var newItem = document.createElement("p");
        newItem.innerHTML = "Drop №"+kol_rand+": "+drop;
        newItem.className = "animated pulse " +"class"+drop;
        log.appendChild(newItem);
        
        log.scrollTop = log.scrollHeight;
    }

    randButton.addEventListener('click', rand);
    nextPage.addEventListener('click', newUrl);

    function newUrl(){
        bod.classList.add("animated", "zoomOut");
        setTimeout(urlNew,2000);
    }

    function urlNew(){
        if(location.href.includes("2")){
            window.location = "index.html" ;   
        }else{
        window.location = "index2.html" ;   
        }        
    }

    function fun (){
        image.classList.remove("animated","bounceIn");
        buttonDIV.classList.remove("noVisible");
        if(drop == 10){
            bod.classList.remove("animated","wobble");
        }
    }

}()