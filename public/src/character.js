import GameObject from './GameObject.js';

export default class Character extends GameObject {
	constructor(name) {
		super({x: 0, y: 0});
		this.name = name;
	}
}