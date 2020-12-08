function changeColor(){

//var text = document.getElementById("para1").style.color = "red";  
// var text = document.getElementById("para1").style.backgroundColor = "red";

var paragraph = document.getElementsByTagName("p");
// var changeParaText = paragraph[0].style.fontStyle = "italic";
// var changeParaText = paragraph[1].style.fontStyle = "italic";
// var changeParaText = paragraph[2].style.fontStyle = "italic";
// var changeParaText = paragraph[3].style.fontStyle = "italic";

for(var i = 0;i<paragraph.length;i++){
paragraph[i].style.color= "blue";
}


var paragraph = document.getElementsByClassName("para");
var changeText = paragraph[0].style.color = "red";
var changeText = paragraph[1].style.color = "red";

var paragraph = document.getElementsByClassName("text");

var changeText = paragraph[0].innerHTML = "new text one";
var changeText = paragraph[1].innerHTML = "new text two";

}

function changeText(){
    var paragraph = document.getElementsByClassName("change");
    var firstParaText = paragraph[0].innerHTML;
    var SecondParaText = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstParaText   +  SecondParaText;

    var firstParaText = paragraph[0].innerHTML= " ";
    var SecondParaText = paragraph[1].innerHTML = " ";

 document.getElementById("image").src="pictures/player2.jpg" ;




}
/* 
javascript events 
1. choose the element where we will place the event - itcan be in the button ellment or anywhere
2. choose the event we warn ot use it can be onclick , onmouseover or onmouseout
3. when the event happnes  something happens
*/

function changeBackground(){

var text = document.getElementById("event").style.backgroundColor ="red";

}

function backToNormal(){

var text = document.getElementById("event").style.backgroundColor = "";
}



function newParagraph(){
 //creating a heading//
var heading = document.createElement("h2");
var main = document.getElementById("main");
main.appendChild(heading);
var textH = document.createTextNode("What family is important");
 heading.appendChild(textH)   
   
var element = document.createElement("p");//ths creates a paragraph//
   
main.appendChild(element);
    
var text = document.createTextNode("If you're wondering why families are important to individuals, there are a number of reasons. The definition of family is one that seems to change with the times, but it usually includes a group of people related to each other and living together");

element.appendChild(text);


var text = document.createTextNode("Iam just trying this oen out am not even sure what am doing");
element.appendChild(text);


var pAttribute = document.createAttribute("id");
pAttribute.value = "test";
element.setAttributeNode(pAttribute);

}


function removeHeader(){
var heading = document.getElementsByTagName("h2")[0];
var parent = heading.parentNode;
parent.removeChild(heading);

var textH = document.getElementsByTagName("P")[2];
parent.removeChild(textH);
}

function changeContent(){
//for childNodes the white spaces are also counted as compared to ellement nodes that startsfrom index 0//
// var parent = document.getElementById("content");
// var child = parent.childNodes[5]; targets the fifith  element 
// child.style.color = "red";

var parent = document.getElementById("content");
var child = parent.firstElementChild;// changes content inthe first paragrpah
child.style.color = "red";
}

//we can laos move up by targetingthe parent nodes 
// function changeContent(){
// var child = document.getElementById("p1");
// var parent = child.parentNode;
// parent.style.color = "blue";
// }

/// moving from sibling to sibling
function changeContent(){
var para2 = document.getElementById("p2");
var sibling = para2.previousElementSibling;
sibling.style.color = "green";

}

//form validation //
function validateTextbox(){
var box = document.getElementById("name");
var box2 = document.getElementById("address");
if(box.value.length< 5|| box2.value.length<5){
alert("the field cannot be blank");
box.focus();
box.style.border = "solid 3px red";
return false;
}
}
// nested loops //
let d = document.getElementById("destination");
for(let i =0; i<10;i++){
    for(let k=i; k>=0;k--){
        d.append(k + " ");
    }
    var br =document.createElement("br");
    d.appendChild(br);
    
    }

function highlightInput(elm) {
    elm.style.background = "yellow";
}

document.getElementById("para1").innerHTML="Hello world";
document.getElementById("para1").style.textTransform = "uppercase";
document.getElementById("para2").innerHTML= "why are you changing me";
document.getElementById("para2").style.textTransform = "uppercase";

var element = document.createElement("h1");
element.textContent = "My first website practice";
document.body.appendChild(element);


var paragraph = document.getElementsByClassName("change");
for(var i = 0;i<paragraph.length;i++){
paragraph[i].style.textTransform= "uppercase";
}


document.getElementsByClassName("change")[0].style.color = "blue";
document.getElementsByClassName("change")[0].innerHTML = "why it has refused to change";


document.getElementsByTagName("h2")[0].innerHTML = "Fill out all the spaces";


document.querySelector("#main").style.backgroundColor = "red";



var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hi, how are you doing?");
newDiv.appendChild(newContent);
var currentDiv = document.getElementById("main"); 
document.body.appendChild(newDiv, currentDiv);