import { Component} from '@angular/core';
import { Router} from '@angular/router';
import {ViewChild, ElementRef} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';




@Component({
  selector: 'ballcanvas',

  moduleId: module.id,
  styleUrls: ['./ballcanvas.css'],
  templateUrl: './ballcanvas.html',


})

export class BallCanvas{

  @ViewChild("canvas") canvas: ElementRef;


  constructor(){}
 ngAfterViewInit(){
   class Ball {
     x: number;
     y: number;
     z: number;
     dx: number;
     dy: number;
     dz: number;
     ddx: number;
     ddy: number;
     ddz: number;
     size : number;
     constructor(x : number, y: number, z: number){
       this.x = x;
       this.y = y;
       this.z = z;

       this.dx = (Math.random()-0.5) * 0.25;
       this.dy = 0;//(Math.random()-0.5) * 0.0003;
       this.dz = (Math.random()-0.5) * 0.47;
       this.size = 10;
     }



     //draw
     draw(ctx: CanvasRenderingContext2D) {
       var scale = this.getScale();
       if(scale > 0){
         var posX = scale * this.x;
         var posY = scale * this.y;
         var radius = this.size*scale;
         var pixelContextX = scale * xLen * cm;
         var pixelContextY = scale * yLen * cm;
         var offsetX = (width - pixelContextX)/2;
         var offsetY = (height - pixelContextY)/2;

         ctx.beginPath();
         ctx.arc(
           cm * posX + offsetX + pixelContextX/2, //+ ((xMax/2)*(1.0 - this.getSize())),
           cm * posY + offsetY, //+ ((yMax/2)*(1.0 - this.getSize())),
          radius*cm,
           0, 2 * Math.PI, false);
           ctx.strokeStyle = '#c3ce65';
           ctx.fillStyle = '#e2f442';
           ctx.stroke();
           ctx.fill();
          //  ctx.rect(offsetX,
          //    offsetY,
          //    pixelContextX,
          //    pixelContextY);
          //    ctx.stroke();

       }

     }
     update(time: number) {
       //time updates
this.dy += 0.00002 * time *time;

       this.x += time * this.dx;
       this.y += time * this.dy;
       this.z += time * this.dz;


       if ((this.x) > xMax) {
         this.x = xMax;
         this.dx *= -1.0;
       }
       if ((this.x) < xMin) {
         this.x = xMin;
         this.dx *= -1.0;
       }


       if ((this.y) > yMax) {
         this.y = yMax;
         this.dy*= -1.0;
       }
       if ((this.y) < yMin) {
         this.y = yMin;
         this.dy *= -.8;
       }
       if ((this.z) > zMax) {
         this.z = zMax;
         this.dz *= -1.0;
       }
       if ((this.z) < zMin) {
         this.z = zMin;
         this.dz *= -1,0;
       }



     }
     getScale() {
       return getScale(this.z);

     }

   }
   let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext("2d");
        // happy drawing from here on

        var timeStamp = new Date();
        var clippingPlane = 4.0;

        const cm = 38;
        const height = this.canvas.nativeElement.offsetHeight;
        const width = this.canvas.nativeElement.offsetWidth;
        this.canvas.nativeElement.height = height;
        this.canvas.nativeElement.width = width;

        console.log(height, width);

        var xMax = 300.0;
        var xMin = -300.0;
        var xLen = Math.abs(xMax) + Math.abs(xMin);
        var yMax = 200.0//200.0;
        var yMin = 0.0 //0.0;
        var yLen = Math.abs(yMax) + Math.abs(yMin);
        var zMax = 100.0;
        var zMin = -1.0;
        var zLen = Math.abs(zMax) + Math.abs(zMin);

        let balls : Ball[] = [];
        for(let i = 0; i<7; i++){
          balls[i] = new Ball(
            Math.random()*xLen+xMin,
            Math.random()*yLen-yMin,
            Math.random()*zLen-zMin
          )
        }




        function getScale(z : number){
          return ((clippingPlane)/(clippingPlane + z));
        }

        function draw() {

          ctx.clearRect(0, 0, width, height); // clear canvas


          var newTime = new Date();
          var elapsedTime = newTime.getMilliseconds() - timeStamp.getMilliseconds();
          if(elapsedTime < 0){
            elapsedTime = newTime.getMilliseconds();
          }
          timeStamp = newTime;


          var scale = getScale(zMax);
          var pixelContextX = scale * xLen * cm;
          var pixelContextY = scale * yLen * cm;
          var offsetX = (width - pixelContextX)/2;
          var offsetY = (height - pixelContextY)/2;
          var x1 = offsetX;
          var y1 = offsetY;
          var x2 = pixelContextX + offsetX;
          var y2 = pixelContextY + offsetY;
          ctx.fillStyle = '#e8e9ed';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1, y2);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x2, y1);
          ctx.closePath();
          ctx.fill();

          scale = getScale(0.0+clippingPlane);
          pixelContextX = scale * xLen * cm;
          pixelContextY = scale * yLen * cm;
          offsetX = (width - pixelContextX)/2;
          offsetY = (height - pixelContextY)/2;
          var x3 = offsetX;
          var y3 = offsetY;
          var x4 = pixelContextX + offsetX;
          var y4 = pixelContextY + offsetY;

          ctx.fillStyle = '#d1d3d6';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x3,y3);
          ctx.lineTo(x3, y4);
          ctx.lineTo(x1, y2);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#e0e2e5';
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x3,y3);
          ctx.lineTo(x4, y3);
          ctx.lineTo(x2, y1);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#dbdce0';
          ctx.beginPath();
          ctx.moveTo(x2, y1);
          ctx.lineTo(x4,y3);
          ctx.lineTo(x4, y4);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#ccced1';
          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x4,y4);
          ctx.lineTo(x3, y4);
          ctx.lineTo(x1, y2);
          ctx.closePath();
          ctx.fill();

        for (var i = 0; i < balls.length; i++){
          balls[i].update(elapsedTime);
          balls[i].draw(ctx);
        }

          //ctx.fillRect(time.getMilliseconds()%window.innerWidth, 100, 50, 50); // Shadow

          window.requestAnimationFrame(draw);
        }

        window.requestAnimationFrame(draw);

 }



}
