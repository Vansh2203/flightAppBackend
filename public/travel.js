var id = null;
function moveimg(){
    var moveitem = document.getElementById("moveimage");
    clearInterval(id);
    var pos = 31;
    var topi = 2;
    id = setInterval(frame, 100);
    function frame(){
    if(pos == 22){
        // clearInterval(id);
        moveitem.style.right = 31 + '%';
        moveitem.style.top = 2 + "px";
    }else{
        pos--;
        topi+=2;
        moveitem.style.right = pos + "%";
        moveitem.style.top = topi + "px";
    }
    }
}
function moveimg1(){
    var moveitem = document.getElementById("moveimage");
    clearInterval(id);
    var pos = 31;
    id = setInterval(frame, 100);
    function frame(){
    if(pos == 13){
        // clearInterval(id);
        moveitem.style.right = 31 + '%';
    }else{
        pos--;
        moveitem.style.right = pos + "%";
    }
    }
}
function moveimg2(){
    var moveitem = document.getElementById("moveimage");
    clearInterval(id);
    var pos = 31;
    id = setInterval(frame, 100);
    function frame(){
    if(pos == 1){
        // clearInterval(id);
        moveitem.style.right = 31 + '%';
    }else{
        pos--;
        moveitem.style.right = pos + "%";
    }
    }
}

function onloadtext(){
    var text = document.getElementById('imagetext');
    clearInterval(id);
    var pos = 5;
    var opacity = 0;
    id = setInterval(frame, 100);
    function frame(){
    if(pos == 65){
        text.style.left = pos + "px";
    }
    else{
        opacity+=0.1;
        pos+=5;
        text.style.left = pos+"px";
        text.style.opacity = opacity;
    }
    }
}