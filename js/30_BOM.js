//! Browser Object Model (BOM)
// The window object is supported by all browsers. It represents the browser's window.

/*
* All global JavaScript objects, functions, and variables automatically become members of the window object.
* Global variables are properties of the window object.
* Global functions are methods of the window object.

* Window Size
window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window

* Window Screen
* The window.screen object contains information about the user's screen.
* The window.screen object can be written without the window prefix.
* Properties:
screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

* Window Location
* The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
* The window.location object can be written without the window prefix.
location.href returns the href (URL) of the current page
location.hostname returns the domain name of the web host
location.pathname returns the path and filename of the current page
location.protocol returns the web protocol used (http: or https:)
location.assign() loads a new document

* Window History
* The window.history object contains the browsers history.
* The window.history object can be written without the window prefix.
history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

* Window Navigator
* The window.navigator object contains information about the visitor's browser.
* The window.navigator object can be written without the window prefix.
navigator.appName
navigator.appCodeName
navigator.platform
navigator.cookieEnabled
navigator.language

* JavaScript Cookies
* Cookies let you store user information in web pages.
* Read
let x = document.cookie;
* Create
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";x  

window.alert("some text");
window.prompt("some text", "default text");
window.confirm("some text");

* The setTimeout() and setInterval() are both methods of the HTML DOM Window object
* The window.setTimeout() method can be written without the window prefix.
means U can directly use setTimeout()/setInterval() methods
<button onclick="setTimeout(()=>{alert("Hello")}, 3000)">Try it</button>
*/
