function change(id, id2){
    document.getElementById(id).style.display="none";
    document.getElementById(id2).style.display="block";
}

var form = document.getElementById('zerothoption');

function submit(event){
    username = document.getElementById('name');
    document.getElementById('zerothoption').style.display="none";
    document.getElementById('firstoption').style.display='block';
    event.preventDefault();
}

function finish(id, type){
    document.getElementById(id).style.display="none";
    alert(username.value + "'s potato is: " + type + "!");
    document.getElementById("homebutton").style.display="block";
    document.getElementById('form').reset();
}

form.addEventListener("submit", submit, true)
