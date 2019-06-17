class Map {
    actors = [];

    constructor(width, height) {
        this.width = width || height || (window.innerWidth - 25);
        this.height = height || width || (window.innerHeight - 25);

        this.ctx = document.createElement('canvas').getContext('2d');

        this.ctx.canvas.width = window.innerWidth - 25;
        this.ctx.canvas.height = window.innerHeight - 25;

        document.body.insertBefore(
            this.ctx.canvas,
            document.body.childNodes[0]
        );

        this.interval = setInterval(_ => this.render(), Assets.config().INTERVAL);
    }

    stop() {
        clearInterval(this.interval);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    add(Actor) {
        this.actors.push(Actor);
    }

    render() {
        this.clear();

        for (let i = 0; i < this.actors.length; i++) {
            if (this.actors[i].life <= 0) {
                this.actors[i].dead();
                this.actors.splice(i, 1);
            } else {
                this.actors[i].render();                
            }
        }

        console.log('ITEMS _> ', this.actors);
    }

    everyInterval(n) {
        return (this.frameNo / n) % 1 == 0;
    }
}