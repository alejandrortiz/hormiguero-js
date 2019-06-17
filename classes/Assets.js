// Game settings
const FPS = 60;
const INTERVAL = 1000 / FPS; // milliseconds
const STEP = INTERVAL / 1000; // seconds

const LIME = 0;

const AZUL = 1;
const VERDE = 2;
const AMARILLO = 3;
const NARANJA = 4;
const ROJO = 5;

const colors = { LIME, AZUL, VERDE, AMARILLO, NARANJA, ROJO };

class Assets {
    static color(colorSelected) {
        return ACTORS_CONFIG[colorSelected];
        switch (colorSelected) {
            case LIME:
                return {
                    color: '#CFE596',
                    speed: 8,
                    size: 6
                };
            case VERDE:
                return {
                    color: '#249C43',
                    speed: 5,
                    size: 4
                };
            case AZUL:
                return {
                    color: '#446CE4',
                    speed: 10,
                    size: 2
                };
            case AMARILLO:
                return {
                    color: '#F6C743',
                    speed: 5,
                    size: 6
                };
            case NARANJA:
                return {
                    color: '#E2823E',
                    speed: 3,
                    size: 8
                };
            case ROJO:
            default:
                return {
                    color: '#DC4D3F',
                    speed: 1,
                    size: 10
                };
        }
    }

    static colors() {
        return colors;
    }

    static config() {
        return {
            INTERVAL
        }
    }
}

class ActorConfig {
    static creator(type) {
        let config = {};
        let colorsKeys = Object.keys(colors);

        for (let i = 0; i < 6; i++) {
            config[i] = {
                "color": Assets.color(colors[colorsKeys[i]]).color,
                "speed": Math.round(randomNumber(1, 10)),
                "size": Math.round(randomNumber(1, 10)),
                "life": Math.round(randomNumber(50, 200)),
                "armour": Math.round(randomNumber(50, 200)),
                "energy": Math.round(randomNumber(50, 200)),
                "nutrition": Math.round(randomNumber(50, 200)),
                "hidratation": Math.round(randomNumber(50, 200)),
            }
        }

        console.log(JSON.stringify(config));
    }
}