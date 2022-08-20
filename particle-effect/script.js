'use strict';
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ParticlesArray = [];
let hue = 0;

// console.log(ctx);

// fix streching of drawing when resizing
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



const mouse = {
    x:undefined,
    y:undefined,
}

canvas.addEventListener('click',function(event){
    mouse.x = event.x;
    mouse.y = event.y; 

    //particles adding when clicking
    for(let i = 0; i < 2; i++){
        ParticlesArray.push(new Particle());
    }
});

canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
    //particles adding when clicking
    for(let i = 0; i < 2; i++){
        ParticlesArray.push(new Particle());
    }
});

// class creating new particles objects
class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;  // will create random number between 0 and canvas width
        //this.y = Math.random() * canvas.height;  // will create random number between 0 and canvas height
        this.size  = Math.random() * 15 + 1; // will give a number between 1 and 6
        this.speedX = Math.random() * 3 - 1.5; //will give a number between -1.5 and 1.5 
        this.speedY = Math.random() * 3 - 1.5; //will give a number between -1.5 and 1.5
        this.color =  'hsl(' + hue + ',100%, 50%)';
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        //shrink particles 
        if(this.size > 0.2){
            this.size -= 0.1;
        }
    }

    draw(){
        // ctx.fillStyle = '#' + Math.floor(Math.random() * 999999 + 111111);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2); 
        ctx.fill();
    }
}

// //create new particles
// function init(){
//     for(let i = 0; i < 100; i++){
//         ParticlesArray.push(new Particle());
//     }
// } 

// init();

// console.log(ParticlesArray);

// handle particles in array by updating and drawing
function handleParticles(){
    for(let i = 0; i  < ParticlesArray.length; i++){
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        // remove particles with low size 
        if( ParticlesArray[i].size <= 0.3){
            ParticlesArray.splice(i, 1);
            i--;
        }
    }
}

// animating particles
function animate(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.fillRect(0 ,0 , canvas.width,canvas.height);
    handleParticles();
    hue+=0.5;
    requestAnimationFrame(animate);

}
animate();