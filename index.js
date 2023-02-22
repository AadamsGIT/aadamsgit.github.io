var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("hello world");
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, c.width, c.height);
document.body.style.background = "url(" + c.toDataURL() + ")";
