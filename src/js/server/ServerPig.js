const {PIG_HEIGHT} = require('./Constants');
const {PIG_WIDTH} = require('./Constants');
const {GAME_HEIGHT} = require('./Constants');
const {GAME_WIDTH} = require('./Constants');

const {GRAVITY} = require('./Constants');
const {SERVER_TICKRATE} = require('./Constants');
const {SERVER_TICK_DURATION} = require('./Constants');

class Pig {
    constructor() {
        this.height = PIG_HEIGHT
        this.width = PIG_WIDTH
        this.y = GAME_HEIGHT / 2;
        this.x = GAME_WIDTH * 0.2;
        this.vy = 0;
        this.vx = 0;

    }
    update(delta) {
        this.y += this.vy * (delta / SERVER_TICK_DURATION) / SERVER_TICKRATE;
        if (this.y >= GAME_HEIGHT) {
            this.y = GAME_HEIGHT
        }
        this.vy += GRAVITY * (delta / SERVER_TICK_DURATION) / SERVER_TICKRATE;
    }
}

module.exports = Pig
