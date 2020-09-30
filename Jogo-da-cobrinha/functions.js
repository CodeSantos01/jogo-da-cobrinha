alert('Opa Bem vindo(a) ao Snake!!');
console.log('[André Santos | Discord: André S.#4149]');
console.log('[Caso tenha pego este código e não quiser o alert só remover]');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
document.addEventListener('keydown', keyPush);
setInterval(game,1000/15);

//[ctx context]
px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
// [game]
function game (){
    px += xv;
    py += yv;
    if(px < 0){
        px = tc-1;
    }
    if(px > tc-1){
        px = 0;
    }
    if(py < 0){
        py = tc-1;
    }
    if(py > tc-1){
        py = 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="green";
    for(var i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x==px && trail[i].y==py){
            tail = 5;
        }
    }
    trail.push({x:px,y:py})
    while(trail.length > tail){
        trail.shift();
    }

    if(ax==px && ay==py){
       tail++;
       ax=Math.floor(Math.random()*tc);
       ay=Math.floor(Math.random()*tc);
    }

    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

//[keypressed]

function keyPush(evt){
    switch(evt.keyCode){
        case 37:    
            xv = -1; yv = 0;
            break;
        case 38:
            xv = 0; yv = -1;
            break;
        case 39:
            xv = 1; yv = 0;
            break; 
        case 40:
            xv = 0; yv = 1;
            break;                  
    }
}