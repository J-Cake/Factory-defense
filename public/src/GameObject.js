export default class GameObject {
	constructor(pos) {
		this.pos = pos;
	}

	show() {
		fill(10, 10, 10);
		rect(this.pos.x, this.pos.y, 10, 10);
	}

	update() {
		// update
	}
}