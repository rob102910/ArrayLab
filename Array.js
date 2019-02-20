var L= ["dog","cat","Hippo","Bat","Alligator", "Lion"];
var list = document.createElement("ul");
L.forEach(function(d);
{
  var listelement = document.createElement("il");
  var node = createTextNode(d);
  listelement.appendChild(node);
})
