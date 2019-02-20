var L= ["dog","cat","Hippo","Bat","Alligator", "Lion"];

var list = document.createElement("ul");
var e = document.getElementByTagName("body");
e.appendChild(list);

var listelement = document.createElement("li");
var node = createTextNode("dog");
listelement.appendChild(node);
var element = document.getElementByTagName("ul");
element.appendChild(listelement);


var listelement1 = document.createElement("li");
var node1 = createTextNode("cat");
listelement1.appendChild(node1);
element.appendChild(listelement1);


var listelement2 = document.createElement("li");
var node2 = createTextNode("hippo");
listelement2.appendChild(node2);
element.appendChild(listelement2);


var listelement3 = document.createElement("li");
var node3 = createTextNode("bat");
listelement3.appendChild(node3);
element.appendChild(listelement3);


var listelement4 = document.createElement("li");
var node4 = createTextNode("alligator");
listelement4.appendChild(node4);
element.appendChild(listelement4);


var listelement5 = document.createElement("li");
var node5 = createTextNode("lion");
listelement5.appendChild(node5);
element.appendChild(listelement5);



