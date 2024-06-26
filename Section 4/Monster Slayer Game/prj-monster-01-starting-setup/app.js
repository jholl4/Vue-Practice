function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHp: 100,
            monsterHp: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHp < 0) {
                return {width: '0%'};
            }else {
                return {width: this.monsterHp + '%'};
            }
        },
        playerBarStyles() {
            if (this.playerHp < 0) {
                return {width: '0%'};
            } else {
                return {width: this.playerHp + '%'};
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHp(value) {
            if (value <= 0 && this.monsterHp <= 0) {
                // A draw condition
                this.winner = 'draw';
            }else if (value <= 0) {
                // Player has lost
                this.winner = 'monster';
            }
        },
        monsterHp(value) {
            if (value <= 0 && this.playerHp <= 0) {
                // A draw condition
                this.winner = 'draw';
            }else if (value <= 0) {
                // Monster has lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHp -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHp -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHp -= attackValue;
            this.addLogMessage('player', 'special attack', attackValue)
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHp + healValue > 100) {
                this.playerHp = 100;
            }else {
                this.playerHp += healValue;
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer();
        },
        startNewGame() {
            this.playerHp = 100;
            this.monsterHp = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
});

app.mount('#game');