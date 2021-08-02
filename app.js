const app = Vue.createApp({
    data() {
        return {
            title: 'Coinflipper',
            // flips: ['heads', 'tails', 'heads', 'heads', 'tails'],
            flips: [],
            headsimg: 'img/headslg.png',
            tailsimg: 'img/tailslg.png'
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
    },
    computed: {
        headsFlipped() {
            heads = 0
            this.flips.forEach(function(flip) {
                if(flip == 'heads') {
                    heads = heads +1
                }
            })
            return heads
        },
        tailsFlipped() {
            tails = 0
            this.flips.forEach(function(flip) {
                if(flip == 'tails') {
                    tails = tails +1
                }
            })
            return tails
        }
    }
})