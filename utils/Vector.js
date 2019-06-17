class Vector2 {
    constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	clone() {
		return new Vector2(this.x, this.y)
	}

	add(VectorParam) {
		return new Vector2(this.x + VectorParam.x, this.y + VectorParam.y);
	}

	subtract(VectorParam) {
		return new Vector2(this.x - VectorParam.x, this.y - VectorParam.y);
	}

	scale(scalar) {
		return new Vector2(this.x * scalar, this.y * scalar);
	}

	dot(VectorParam) {
		return (this.x * VectorParam.x + this.y + VectorParam.y);
	}

	moveTowards(VectorParam, t) {
		// Linearly interpolates between vectors A and B by t.
		// t = 0 returns A, t = 1 returns B
		t = Math.min(t, 1); // still allow negative t
		let diff = VectorParam.subtract(this);
		return this.add(diff.scale(t));
	}

	magnitude() {
		return Math.sqrt(this.magnitudeSqr());
	}

	magnitudeSqr() {
		return (this.x * this.x + this.y * this.y);
	}

	distance(VectorParam) {
		return Math.sqrt(this.distanceSqr(VectorParam));
	}

	distanceSqr(VectorParam) {
		const deltaX = this.x - VectorParam.x;
		const deltaY = this.y - VectorParam.y;
		return (deltaX * deltaX + deltaY * deltaY);
	}

	normalize() {
		const mag = this.magnitude();
        const NewVector = this.clone();
        
		if(Math.abs(mag) < 1e-9) {
			NewVector.x = 0;
			NewVector.y = 0;
		} else {
			NewVector.x /= mag;
			NewVector.y /= mag;
        }
        
		return NewVector;
	}

	angle() {
		return Math.atan2(this.y, this.x);
	}

	angle2(VectorParam) {		
		let angle = Math.atan2((this.x - VectorParam.x), -(this.y - VectorParam.y)) * 180 / Math.PI;

		if (angle < 0) {
			angle += 360;
		}

		return angle;
	}

	rotate(alpha) {
		const cos = Math.cos(alpha);
        const sin = Math.sin(alpha);
        
        const NewVector = new Vector2();
        
		NewVector.x = this.x * cos - this.y * sin;
        NewVector.y = this.x * sin + this.y * cos;
        
		return NewVector;
	}

	toPrecision(precision) {
        var vector = this.clone();
        
		vector.x = vector.x.toFixed(precision);
        vector.y = vector.y.toFixed(precision);
        
		return vector;
	}

	toString() {
		var vector = this.toPrecision(1);
		return ("[" + vector.x + "; " + vector.y + "]");
    }
}