class Viewport {
	constructor(width, height) {
		this.mapW = width || height || window.innerWidth - 25;
        this.mapH = height || width || window.innerHeight - 25;
        
		this.tileW = window.innerWidth;
		this.tileH = window.innerHeight;

		this.screen = [0, 0];
		this.startTile = [0, 0];
		this.endTile = [0, 0];
		this.offset = [0, 0];
	}

	update(px, py) {
		this.offset[0] = Math.floor(this.screen[0] / 2 - px);
		this.offset[1] = Math.floor(this.screen[1] / 2 - py);

		let tile = [Math.floor(px / this.tileW), Math.floor(px / this.tileH)];

		this.startTile[0] =
			tile[0] - 1 - Math.ceil(this.screen[0] / 2 / this.tileW);
		this.startTile[1] =
			tile[1] - 1 - Math.ceil(this.screen[1] / 2 / this.tileH);

		if (this.startTile[0] < 0) {
			this.startTile[0] = 0;
		}

		if (this.startTile[1] < 0) {
			this.startTile[1] = 0;
		}

		this.endTile[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / this.tileW);
        this.endTile[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / this.tileH);
        
        if (this.endTile[0] >= this.mapW) {
            this.endTile[0] = this.mapW - 1;
        }
        
        if (this.endTile[1] >= this.mapH) {
            this.endTile[1] = this.mapH - 1;
        }
	}
}
