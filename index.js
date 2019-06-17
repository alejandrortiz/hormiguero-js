function startGame() {
	(_ => {
		const ACTORS = 2000;
		const MAP_SIZE = 100000;

		const Stage = new Map(MAP_SIZE);
		const View = new Viewport(MAP_SIZE);

		for (let i = 0; i < ACTORS; i++) {
			// break;
			new Actor(
				Stage,
				new Vector2(
					randomNumber(Stage.width - 10, 0),
					randomNumber(Stage.height - 10, 0)
				),
				parseInt(randomNumber(6, 1))
			);
		}

		// ActorConfig.assets(null);

		View.screen = [MAP_SIZE, MAP_SIZE];

		window.addEventListener("keydown", e => {
			e.defaultPrevented();
			myGameArea.keys = myGameArea.keys || [];
			myGameArea.keys[e.keyCode] = e.type === "keydown";
		});
		window.addEventListener(
			"keyup",
			e => (myGameArea.keys[e.keyCode] = e.type === "keydown")
        );
        
        let screen = {
            position: [0 , 0],
            dimensions: [window.innerWidth , window.innerHeight]
        }

        // MOVE LEFT
		if (myGameArea.keys && myGameArea.keys[37]) {
			screen.position[0] -= 1;
        }
        // MOVE RIGHT
		if (myGameArea.keys && myGameArea.keys[39]) {
			screen.position[0] += 1;
        }
        // MOVE UP
		if (myGameArea.keys && myGameArea.keys[38]) {
			screen.position[1] -= 1;
		}
		if (myGameArea.keys && myGameArea.keys[40]) {
			screen.position[1] += 1;
        }
        
        View.screen = screen.dimensions;

		View.update(
			screen.position[0] + screen.dimensions[0] / 2,
			screen.position[1] + screen.dimensions[1] / 2
		);
	})();
}
