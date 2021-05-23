<!-- http://grimmdude.com/MidiPlayerJS/docs/Track.html#disable -->
<template><div>
    <a href="" class="btn btn-block btn-dark">refresh</a>

    <midiplayer-editor-items v-model="props.value"
        :song-percent="($refs.midiplayer? $refs.midiplayer.songPercent: 0)"
        @change="emitValue()"
    ></midiplayer-editor-items>

    <midiplayer :value="props.value" ref="midiplayer"></midiplayer>
</div></template>

<script>
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';

export default {
    props: {
        value: {default:Object},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
            this.props.value = this.valueDefault(this.props.value);
            this.playerInit();
        }},
    },

    data() {
        return {
            props: this.valueDefault(this.$props),
            lastPropsValueMidiUrl: false,

            instrument: false,
            soundfontLoaded: false,
            player: false,
            playerEvent: {},
            songPercent: 0,

            editor: {
                zoomX: 200,
            },
        };
    },

    computed: {
        isPlaying() {
            if (! this.player) return false;
            return this.player.isPlaying();
        },
        
        songTime() {
            if (! this.player) return false;
            return this.player.getSongTime();
        },

        nextChords() {
            // return this.chords.filter(item => item.percent>=this.songPercent);
            return [];
        },

        nextLyrics() {
            // return this.lyrics.filter(item => item.percent>=this.songPercent);
            return [];
        },
    },

    methods: {
        emitValue() {
            this.$emit('input', this.props.value);
        },

        valueDefault(value) {
            let _merge = (item1, item2) => {
                item1 = typeof item1=='object'? item1: {};
                item2 = typeof item2=='object'? item2: {};
                return JSON.parse(JSON.stringify(Object.assign({}, item1, item2)));
            };

            let chord = _merge({
                id: false,
                user_id: false,
                artist_id: false,
                slug: '',
                name: '',
                midi: {},
                items: [],
                user: {},
                chords_artist: {},
            }, value);

            chord.chords_artist = _merge({
                id: false,
                slug: "",
                name: "",
                cover: {},
            }, chord.chords_artist);

            return chord;
        },

        uuid() {
            return ([1e5] + 0).replace(/[018]/g, c => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
        },

        // item = {percent:35, type:"chord", value:"G#"};
        itemAdd(item) {
            item = JSON.parse(JSON.stringify(item||{}));
            item = {id:this.uuid(), percent:0, type:'lyric', value:'', ...item};
            this.props.value.items.push(item);
            this.emitValue();
        },

        itemRemove(item) {
            let index = this.props.value.items.indexOf(item);
            this.props.value.items.splice(index, 1);
            this.emitValue();
        },

        playerInit() {
            let _playerInit = () => {
                console.log('playerInit');
                
                this.player = new MidiPlayer.Player(ev => {
                    // this.playerEvent = ev;
                    this.songPercent = Math.max(0, 100-this.player.getSongPercentRemaining());
                    
                    if (ev.name == 'Note on') {
                        this.instrument.play(ev.noteName, AudioContext.currentTime, {gain:ev.velocity/100});
                    }
                });

                let content = this.props.value.midi.url.split(',')[1];
                content = Buffer.from(content, 'base64');
                this.player.loadArrayBuffer(content);

                Soundfont.instrument(this.$audioContext, 'marimba').then(instrument => {
                    this.instrument = instrument;
                });
            };

            if (!this.props.value.midi || (this.props.value.midi && !this.props.value.midi.url)) {
                if (! +this.props.value.id) return;
                this.$axios.get(`/api/chords-song/find/${this.props.value.id}`).then(resp => {
                    this.props.value = resp.data;
                    this.emitValue();
                    this.playerInit();
                });
                return;
            }
            

            if (this.props.value.midi && this.props.value.midi.url) {
                if (this.lastPropsValueMidiUrl != this.props.value.midi.url) {
                    this.lastPropsValueMidiUrl = this.props.value.midi.url;
                    _playerInit();
                }
            }
        },

        play() {
            if (this.isPlaying) {
                this.pause();
                return;
            }

            this.player.play();
        },

        pause() {
            this.player.pause();
        },

        stop() {
            this.player.stop();
            this.songPercent = Math.max(0, 100-this.player.getSongPercentRemaining());
        },

        skipToPercent(percent) {
            let isPlaying = this.player.isPlaying();
            if (isPlaying) this.player.stop();

            setTimeout(() => {
                this.player.skipToPercent(percent);
                if (isPlaying) this.player.play();
    
                this.songPercent = Math.max(0, 100-this.player.getSongPercentRemaining());
            }, 10);
        },
    },

    mounted() {
        this.playerInit();
    },
}
</script>


<style>
.midiplayer-editor-pattern {
    min-height: 400px;
    background-image: linear-gradient(90deg, transparent 50%, #eee 50%);
    background-size: 5% 50%;
}
</style>