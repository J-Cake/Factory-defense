import {getVisible, generateMap} from './map.js';
import Player from './player.js';

const player = new Player(0, 0);

const scale = 30;

globalise(function setup() { // function setup
    createCanvas(window.innerWidth, window.innerHeight);

    globalise({
        name: "map",
        value: generateMap()
    });
});

globalise(async function draw() { // function draw
    noStroke();
    // strokeWeight(1);
    // stroke(0, 0, 0);

    getVisible(player).map(i => {
        fill(i.red, i.green, i.blue);
        rect(i.x * scale, i.y * scale, scale, scale);
    });
});

window.addEventListener('resize', () => { // function resize
    resizeCanvas(window.innerWidth, window.innerHeight);
});

export const SCL = scale;