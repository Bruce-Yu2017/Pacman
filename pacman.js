var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 3, 2, 1, 1, 3, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 3, 1, 1, 4, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];



var pacman = {
    x: 1,
    y: 1
};

var score = 0;

function displayWorld() {
    var output = "";
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            } else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div class='cherry'></div>";
            } else if (world[i][j] == 4) {
                output += "<div class='ghost'></div>";
            }
        }
        output += "\n</div>"
    }
//    console.log(output);
    document.getElementById('world').innerHTML = output;
}


function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();

var pacmanicon = document.getElementById("pacman");

document.onkeydown = function(e) {
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {
        pacmanicon.style.transform="rotate(-180deg)";
        pacman.x--;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) {
        pacmanicon.style.transform="rotate(0deg)";
        pacman.x++;
    }else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] !=2) {
        pacmanicon.style.transform="rotate(-90deg)";
        pacman.y--;
    }else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] !=2) {
        pacmanicon.style.transform="rotate(90deg)";
        pacman.y++;
    }
    if(world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    else if(world[pacman.y][pacman.x] == 4) {
        alert("You have lost your life.");
        score = 0;
    }
    displayPacman();
}
