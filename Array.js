var L= ["dog","cat","Hippo","Bat","Alligator", "Lion"];
var list = document.createElement("ul");
var e = document.getElementByTagName("body");
e.appendChild(list);
L.forEach(function(d);
{
  var listelement = document.createElement("li");
  var node = createTextNode(d);
  listelement.appendChild(node);
  var element = document.getElementByTagName("ul");
  element.appendChild(listelement);
})
