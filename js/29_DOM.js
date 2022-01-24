//! The HTML DOM (Document Object Model)
// The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

/*
* HTML DOM methods are actions you can perform (on HTML Elements).
* HTML DOM properties are values (of HTML Elements) that you can set or change.
document.getElementById("demo").innerHTML = "Hello World!";
* In the example above, getElementById is a method, while innerHTML is a property.

* Finding HTML Elements
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name
document.querySelectorAll()	Find elements by css Query selector
// in argument it will take class or id name.
document.forms["form name"]["field name"]
// document.forms["myForm"]["fname"]

* Changing HTML Elements
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
// attributes like src etc. 
element.style.property = new style	Change the style of an HTML element
// document.getElementById("p2").style.color = "red";
element.setAttribute(attribute, value)	Change the attribute value of an HTML element

* Adding and Deleting Elements
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream

* Adding Events Handlers
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
onclick         -   mouse click
onload          -   window load
onchange        -   any changes
onfocus         -   focus on element
onmouseover     -   like hover
onmouseout      -   like hover out
onmousedown     -   when mouse clicked
onmouseup       -   when mouse release

document.getElementById("myBtn").addEventListener("click", function(){code});
document.getElementById("myBtn").removeEventListener("click", function(){code});

* Creating New HTML Elements (Nodes)
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

* HTMLCollection and a NodeList
* An HTMLCollection is a collection of HTML elements.
like from document.getElementsByTagName()
* A NodeList is a collection of document nodes.
like from document.querySelectorAll()
*/
