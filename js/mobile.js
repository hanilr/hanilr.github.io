changeWhenGone("Snake!", "img/index.ico");

window.onload=function() 
{
    document.title = "Snake!";
    setIco("img/index.ico");

    canv = document.getElementById("gameFrame");
    ctx = canv.getContext("2d");
    document.getElementById("button_up").addEventListener("touchstart", key_up);
    document.getElementById("button_down").addEventListener("touchstart", key_down);
    document.getElementById("button_left").addEventListener("touchstart", key_left);
    document.getElementById("button_right").addEventListener("touchstart", key_right);
    setInterval(game, 1000/15);
}

px = py = 10;
gs = 28;
tc = 35;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 3;

function game() 
{
    px += xv;
    py += yv;

    if(px < 0) 
    {
        px = tc - 1;
    }

    if(px > tc - 1) 
    {
        px = 0;
    }

    if(py < 0) 
    {
        py = tc - 1;
    }

    if(py>tc-1) 
    {
        py = 0;
    }

    ctx.fillStyle = "#dfdfdf";
    ctx.fillRect(0, 0, canv.width, canv.height);
 
    ctx.fillStyle = "#007bfd";
    for(var i=0; i < trail.length; i++) 
    {
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);

        if(trail[i].x == px && trail[i].y == py) 
        {
            tail = 3;       
        }
    }

    trail.push({x:px, y:py});
    while(trail.length > tail) 
    {
        trail.shift();
    }
 
    if(ax == px && ay == py) 
    {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "#161616";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}

function key_left() {xv = -1; yv = 0;}  

function key_up() {xv = 0; yv = -1;} 

function key_right() {xv = 1; yv = 0;} 

function key_down() {xv = 0; yv = 1;}
    
