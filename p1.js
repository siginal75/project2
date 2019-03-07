var list = [];

function addUser(){
    list.push(document.getElementById("hakbun").value);
    document.getElementById("hakbun").value = "";
    document.getElementById("lists").innerText = list;
}
function randNum() {
    var num = ;
    num = Math.floor(Math.random()*list.length);
    alert("list 안의 개수 : " + list.length);
    alert("뽑힌 친구는 "+ list[num]+"입니다 !!");
}
function make_alert(){
    alert("안녕!");
    var a = document.querySelector("body").appendChild("p");
    a.innerText = "누가 한 것일까요?";
    a.style.display = "block";
}