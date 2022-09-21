function change(id, id2){
    document.getElementById(id).style.display="none";
    document.getElementById(id2).style.display="block";
}

function finish(id, type){
    document.getElementById(id).style.display="none";
    alert("Your potato is: " + type + "!");
    document.getElementById("homebutton").style.display="block";
}

