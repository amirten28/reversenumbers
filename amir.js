function letterToNumber(){
var text=document.getElementById("txt");
var aa =text.value.split("");
document.getElementById("txt2").value=aa.reverse().join("");
document.getElementById("txt2").style.color ="red";

}

