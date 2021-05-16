ifMobile();

window.onload=function() 
{
    document.title = "Snake!";
    setIco("img/index.ico");

    canv = document.getElementById("gameFrame");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
}
px = py = 10;
gs = 25;
tc = 20;
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
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, 20, 20);

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
    ctx.fillRect(ax*gs, ay*gs, 20, 20);
}

function keyPush(evt) 
{
    switch(evt.keyCode) 
    {
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
