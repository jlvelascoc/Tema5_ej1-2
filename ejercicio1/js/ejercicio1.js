"use strict";

function recorrerDOM(padre, elemento) {
  var ul, li, texto, atributos = [];

  if(elemento.children.length == 0){
    ul = document.createElement("ul");
    li = document.createElement("li");
    for(let i = 0; i < elemento.attributes.length; i++){
      atributos.push(elemento.attributes[i].name);
    }
    texto = document.createTextNode("Etiqueta: " + elemento.tagName + "; atributos: " + atributos.toString());

    li.appendChild(texto);
    ul.appendChild(li);
    padre.appendChild(ul);
  }
  else{
    var liPadre = document.createElement("ul");
    ul = document.createElement("ul");
    li = document.createElement("li");
    for(let i = 0; i < elemento.attributes.length; i++){
      atributos.push(elemento.attributes[i].name + ": " + elemento.attributes[i].value);
    }
    texto = document.createTextNode("Etiqueta: " + elemento.tagName + "; atributos: " + atributos.toString());

    li.appendChild(texto);
    ul.appendChild(li);

    for(let i = 0; i < elemento.children.length; i++){
      recorrerDOM(liPadre, elemento.children[i]);
    }

    ul.appendChild(liPadre);
    padre.appendChild(ul);
  }
}

window.onload = recorrerDOM(document.body, document.body);
