var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
console.log(canvas.height + "höh");
var ctx = canvas.getContext('2d');
var timeStamp = new Date();
var clippingPlane = 2.0;
var cm = 38;
var xMax = 300.0;
var xMin = -300.0;
var xLen = Math.abs(xMax) + Math.abs(xMin);
var yMax = 200.0; //200.0;
var yMin = 0.0; //0.0;
var yLen = Math.abs(yMax) + Math.abs(yMin);
var zMax = 100.0;
var zMin = -1.0;
var zLen = Math.abs(zMax) + Math.abs(zMin);
var balls = [];
for (i = 0; i < 13; i++) {
    balls[i] = new Ball(Math.random() * xLen - xMin, Math.random() * yLen - yMin, Math.random() * zLen - zMin);
}
function Ball(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = (Math.random() - 0.5) * 0.95;
    this.dy = (Math.random() - 0.5) * 0.13;
    this.dz = (Math.random() - 0.5) * 0.17;
    ;
    var size = 10;
    //draw
    this.draw = function (ctx) {
        var scale = this.getScale();
        if (scale > 0) {
            var posX = scale * this.x;
            var posY = scale * this.y;
            var radius = size * scale;
            var pixelContextX = scale * xLen * cm;
            var pixelContextY = scale * yLen * cm;
            var offsetX = (canvas.width - scale * pixelContextX) / 2;
            var offsetY = (canvas.height - scale * pixelContextY) / 2;
            ctx.beginPath();
            ctx.arc(cm * posX + offsetX, //+ ((xMax/2)*(1.0 - this.getSize())),
            cm * posY + offsetY, //+ ((yMax/2)*(1.0 - this.getSize())),
            radius * cm, 0, 2 * Math.PI, false);
            ctx.strokeStyle = '#c3ce65';
            ctx.fillStyle = '#e2f442';
            ctx.stroke();
            ctx.fill();
            //  ctx.rect(offsetX - pixelContextX/2,
            //    offsetY - pixelContextY/2,
            //  pixelContextX,
            //  pixelContextY);
            //  ctx.stroke();
        }
    };
    this.update = function (time) {
        //time updates
        this.x += time * this.dx;
        this.y += time * this.dy;
        this.z += time * this.dz;
        this.dy += 0.00004 * time * time;
        if ((this.x) > xMax) {
            this.x = xMax;
            this.dx *= -1;
        }
        if ((this.x) < xMin) {
            this.x = xMin;
            this.dx *= -1;
        }
        if ((this.y) > yMax) {
            this.y = yMax;
            this.dy *= -1;
        }
        if ((this.y) < yMin) {
            this.y = yMin;
            this.dy = 0; // *= -1;
        }
        if ((this.z) > zMax) {
            this.z = zMax;
            this.dz *= -1;
        }
        if ((this.z) < zMin) {
            this.z = zMin;
            this.dz *= -1;
        }
    };
    this.getScale = function () {
        return getScale(this.z);
    };
}
function getScale(z) {
    return ((clippingPlane) / (clippingPlane + z));
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    var newTime = new Date();
    var elapsedTime = newTime.getMilliseconds() - timeStamp.getMilliseconds();
    if (elapsedTime < 0) {
        elapsedTime = newTime.getMilliseconds();
    }
    timeStamp = newTime;
    var scale = getScale(zMax);
    var pixelContextX = scale * xLen * cm;
    var pixelContextY = scale * yLen * cm;
    var offsetX = (canvas.width - scale * pixelContextX) / 2;
    var offsetY = (canvas.height - scale * pixelContextY) / 2;
    var x1 = offsetX - pixelContextX / 2;
    var y1 = offsetY - pixelContextY / 2;
    var x2 = pixelContextX / 2 + offsetX;
    var y2 = pixelContextY / 2 + offsetY;
    ctx.fillStyle = '#e8e9ed';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.closePath();
    ctx.fill();
    scale = 0.10; //getScale(0.0+clippingPlane);
    pixelContextX = scale * xLen * cm;
    pixelContextY = scale * yLen * cm;
    offsetX = (canvas.width - scale * pixelContextX) / 2;
    offsetY = (canvas.height - scale * pixelContextY) / 2;
    var x3 = offsetX - pixelContextX / 2;
    var y3 = offsetY - pixelContextY / 2;
    var x4 = pixelContextX / 2 + offsetX;
    var y4 = pixelContextY / 2 + offsetY;
    ctx.fillStyle = '#d1d3d6';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x3, y4);
    ctx.lineTo(x1, y2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#e0e2e5';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y3);
    ctx.lineTo(x2, y1);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#dbdce0';
    ctx.beginPath();
    ctx.moveTo(x2, y1);
    ctx.lineTo(x4, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ccced1';
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x3, y4);
    ctx.lineTo(x1, y2);
    ctx.closePath();
    ctx.fill();
    for (i = 0; i < balls.length; i++) {
        balls[i].update(elapsedTime);
        balls[i].draw(ctx);
    }
    //ctx.fillRect(time.getMilliseconds()%window.innerWidth, 100, 50, 50); // Shadow
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
//# sourceMappingURL=balls.js.map