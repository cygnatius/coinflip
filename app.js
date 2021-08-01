const app = Vue.createApp({
    data() {
        return {
            title: 'Coinflipper',
            // flips: ['heads', 'tails', 'heads', 'heads', 'tails'],
            flips: [],
            heads: 'img/headslg.png',
            tails: 'img/tailslg.png'
        }
    },
    methods: {
        coinflip() {
            if (Math.random()*2 > 1) {
                this.flips.unshift('heads')
            } else {
                this.flips.unshift('tails')
            }
        }
    }
})