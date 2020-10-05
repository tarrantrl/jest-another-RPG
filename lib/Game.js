const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
    // prompt user to create player
    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?',
    })
    // destructure name
    // use arrow function so this is still the Game object
    .then(({name}) => {
        this.player = new Player(name);
        //console.log(this.currentEnemy, this.player);
        this.startNewBattle();
    })
};

module.exports = Game;