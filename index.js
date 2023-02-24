const canvas = document.getElementById('myCanvas');
const parent = document.getElementById('sub');
const ctx = canvas.getContext('2d');
canvas.width = parent.offsetWidth;
canvas.height = parent.offsetHeight;
ctx.fillStyle = 'cyan';
ctx.fillRect(0, 0, canvas.width, canvas.height);
window.addEventListener('resize', function() {
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
