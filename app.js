const app = Vue.createApp({
    data() {
        return {
            title: 'Coinflipper',
            // flips: ['heads', 'tails', 'heads', 'heads', 'tails'],
            flips: [],
            headsimg: 'img/headslg.png',
            tailsimg: 'img/tailslg.png',
            coins: 1
        }
    },
    methods: {
        coinflip() {
            let set = [];
            for (i = 0; i < this.coins; i++) {
                if (Math.random()*2 > 1) {
                    set.unshift('heads');
                } else {
                    set.unshift('tails');
                }
            }
            this.flips.unshift(set);
        }
    },
    computed: {
        lastFlipCoinCount() {
            if(this.flips.length == 0) {
                return 0;
            } else {
                let last = this.flips[0];
                return last.length;
            }
        },
        lastFlipCoinCount2() {
            return 1;
        },
        headsFlipped() {
            let heads = 0;
            this.flips.forEach(function(set) {
                set.forEach(function(flip) {
                    if(flip == 'heads') {
                        heads = heads + 1;
                    }
                });
            });
            return heads;
        },
        tailsFlipped() {
            let tails = 0;
            this.flips.forEach(function(set) {
                set.forEach(function(flip) {
                    if(flip == 'tails') {
                        tails = tails + 1;
                    }
                });
            });
            return tails;
        },
        headsFlippedThisSet() {
            let heads = 0;
            if(this.flips.length == 0) {
                heads = 0;
            } else {
                this.flips[0].forEach(function(flip) {
                    if(flip == 'heads') {
                        heads = heads + 1;
                    }
                });
            }
            return heads;
        },
        tailsFlippedThisSet() {
            let tails = 0;
            if(this.flips.length == 0) {
                tails = 0;
            } else {
                this.flips[0].forEach(function(flip) {
                    if(flip == 'tails') {
                        tails = tails + 1;
                    }
                });
            }
            return tails;
        }
    }
}).mount('#app')