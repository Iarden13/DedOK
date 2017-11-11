function add(){
    
var add = document.getElementsByTagName("input")[0];

if(add.value.replace(/\s/g, '')==""){
    alert("Write something!");
}else{

    var ul = document.getElementsByTagName("ul")[0];
    var newLi = document.createElement('li');
    newLi.innerHTML = add.value + " ";
    add.value = '';
    ul.appendChild(newLi);
    
    newLI = document.createElement('button');
    newLI.innerHTML = 'x';
    newLI.setAttribute('onclick','del(this)');
    ul.lastChild.appendChild(newLI);

    }
}


function del(obj){
    obj.parentNode.remove();
}
