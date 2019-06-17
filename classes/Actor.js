class Actor {
	constructor(Location, Position, type) {
		this.Location = Location;
		this.ctx = Location.ctx;
		Location.add(this);

		this.type = type;

		this.Position = Position;

		const assets = ACTORS_CONFIG[type];

		this.size = assets.size || 10;
		this.speed = assets.speed || 10;
		this.color = assets.color || "blue";

		this.life = 10;
		this.armour = 10;
		this.energy = 10;
		this.nutrition = 10;
		this.hidration = 10;

		this.iAmOut = 0;

		this.draw();
		this.moveToRandom();
	}

	render() {
        this.draw();

		if (!!this.PositionToMove) {
			this.move();

			this.limitOfLocation();
        }
        
        if (this.iAmOut === 1000) {
            this.dead();
        }
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.Position.x, this.Position.y, this.size, 0, Math.PI * 2);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.ctx.closePath();
	}

	limitOfLocation() {
		const POS_X = this.Position.x;
		const POS_Y = this.Position.y;
		const LOCATION = this.Location;

		let inTheLimit = false;

		if (POS_X < this.size) {
			// IMPACTO IZQUIERDA
			inTheLimit = true;
		} else if (POS_X > LOCATION.width - (this.size + 2)) {
			// IMPACTO DERECHA
			inTheLimit = true;
		} else if (POS_Y < this.size) {
			// IMPACTO ARRIBA
			inTheLimit = true;
		} else if (POS_Y > LOCATION.height - (this.size + 2)) {
			// IMPACTO ABAJO
			inTheLimit = true;
		}

        if (!!inTheLimit) {
            this.iAmOut += 1;
            this.rebotar();
        }
	}

	moveToRandom() {
		let ranX = randomNumber(this.Location.width - this.size, this.size);
		let ranY = randomNumber(this.Location.height - this.size, this.size);

		this.moveTo(new Vector2(ranX, ranY));
	}

	moveTo(NewPosition) {
		this.PositionToMove = NewPosition;
		this.angle = this.Position.angle2(this.PositionToMove);

		this.move();
	}

	move() {
		const stepX = this.speed * Math.sin(this.angle);
		const stepY = this.speed * Math.cos(this.angle);

		this.Position.x += stepX;
		this.Position.y -= stepY;
    }
    
    dead() {
        console.log('DEAD -> ', this);
        this.life = 0;
        delete this;
    }

    rebotar() {
        let angle = this.angle;
        angle = Math.round(randomNumber(50, 0)) + 166;

        if (angle < 0){
            angle += 360;
        }

        this.angle = angle % 360;
    }
}
