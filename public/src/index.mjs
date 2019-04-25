import character from './character.js';

const socket = io(window.location.host + ":" + window.location.port);

socket.on('join', message => console.log(message));

console.log(character);