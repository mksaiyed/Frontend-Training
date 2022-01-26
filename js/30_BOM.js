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
// The screen.width property returns the width of the visitor's screen in pixels.
screen.width 
screen.height
// The screen.availWidth property returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
screen.availWidth
screen.availHeight
// The screen.colorDepth property returns the number of bits used to display one color.
// The screen.pixelDepth property returns the pixel depth of the screen.
screen.colorDepth
screen.pixelDepth
// For modern computers, Color Depth and Pixel Depth are equal.

* Window Location
* The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
* The window.location object can be written without the window prefix.
location.href returns the href (URL) of the current page // https://www.w3schools.com/js/js_window.asp 
location.hostname returns the domain name of the web host // www.w3schools.com
location.pathname returns the path and filename of the current page // /js/js_window.asp
location.protocol returns the web protocol used (http: or https:) // https:
location.assign() loads a new document

* Window History
* The window.history object contains the browsers history.
* The window.history object can be written without the window prefix.
history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

* Window Navigator
* The window.navigator object contains information about the visitor's browser.
* The window.navigator object can be written without the window prefix.
navigator.appName // Netscape
navigator.appCodeName // Mozilla
navigator.platform // win32
navigator.product // Gecko
navigator.cookieEnabled // true
navigator.language // en-GB
navigator.appVersion 
navigator.geolocation.getCurrentPosition(showPosition) // Know exact location 
// Gives the latitude and longitude of the user's position

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
