
function welcome() {
var yourname=prompt("Hello dear, what shall we shall we call you:")
var firstlet= yourname.slice(0,1)
var capfirst = firstlet.toUpperCase();
var restlet = yourname.slice(1, yourname.length)
var smalllet= restlet.toLowerCase();
var fullname= capfirst + smalllet;
alert("Hello " + fullname + " you're welcome.")
}
welcome()