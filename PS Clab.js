var list = [[],[],[]];

function addUser(){
    if(document.getElementById("inputState").value==0){
        var a = document.getElementById("lib-num").value+":"+document.getElementById("stu-name").value;
        list[0].push(a);
        document.getElementById("l1").innerText = list[0];
    }
    if(document.getElementById("inputState").value==1){
        var a = document.getElementById("lib-num").value+":"+document.getElementById("stu-name").value;
        list[1].push(a);
        document.getElementById("l2").innerText = list[1];
    }
    if(document.getElementById("inputState").value==2){
        var a = document.getElementById("lib-num").value+":"+document.getElementById("stu-name").value;
        list[2].push(a);
        document.getElementById("l3").innerText = list[2];
    }
    document.getElementById("lib-num").value = "";
    document.getElementById("stu-name").value = "";
}

function pick(bu){
    var num = document.getElementById("people").value;
    while(num < list[bu].length){
        list[bu].splice(Math.floor(Math.random()*list[bu].length),1);
    }
    document.getElementById("l1").innerText = list[0];
    document.getElementById("l2").innerText = list[1];
    document.getElementById("l3").innerText = list[2];
}

