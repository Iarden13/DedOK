window.onload = function(){

var add_input = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ul")[0];
 
function add(){
        
if(add_input.value.replace(/\s/g, '')==""){
    alert("Write something!");
}else{
    
    var newLi = document.createElement('li');
    newLi.innerHTML = add_input.value + " ";
    add_input.value = '';
    ul.appendChild(newLi);
    
    newLI = document.createElement('button');
    newLI.innerHTML = 'x';
    newLI.addEventListener("click", del);
    ul.lastChild.appendChild(newLI);

    }
}

function del(){
    this.parentNode.remove();
}

addBUTTON.addEventListener("click", add);
}