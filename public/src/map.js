import {SCL} from './index.js';

const colours = {
    grass: {
        red: 150,
        green: 250,
        blue: 175
    },
    earth: {
        red: 150,
        green: 70,
        blue: 20
    },
    stone: {
        red: 120,
        green: 120,
        blue: 135
    },
    iron: {
        red: 200,
        green: 200,
        blue: 200
    },
    copper: {
        red: 250,
        green: 150,
        blue: 50
    },
    coal: {
        red: 10,
        green: 10,
        blue: 10
    }
};

export function getVisible(player) {
    return window.globals.map;
}

export function generateMap() {
    const map = [];

    for (let x in new Array(floor(window.innerWidth / SCL)).fill(0)) {
        for (let y in new Array(floor(window.innerHeight / SCL)).fill(0)) {
            map.push({
                ...colours.coal,
                x,
                y
            })
        }
    }

    return map;
}