<!-- http://grimmdude.com/MidiPlayerJS/docs/Track.html#disable -->
<template><div>

    <div class="bg-light shadow-sm">
        <div class="p-2">
            <h3 class="m-0" v-if="props.value.link">
                <nuxt-link :to="props.value.link.profile">
                    {{ props.value.name }}
                </nuxt-link>
            </h3>

            <h5 class="m-0" v-if="props.value.chords_artist && props.value.chords_artist.link">
                <nuxt-link :to="props.value.chords_artist.link.profile">
                    {{ props.value.chords_artist.name }}
                </nuxt-link>
            </h5>
        </div>

        <div v-if="props.value.midi && props.value.midi.url">
            
            <!-- Lyrics -->
            <div class="text-center" style="max-height:50px; overflow:hidden;">
                <div v-for="l in nextLyrics">{{ l.value }}</div>
            </div>

            <div class="d-flex align-items-center p-2">
                <div class="pr-1" v-if="!isPlaying">
                    <button type="button" class="btn btn-primary" @click="play()">
                        <i class="fas fa-play"></i>
                    </button>
                </div>

                <div class="pr-1"  v-if="isPlaying">
                    <button type="button" class="btn btn-primary" @click="pause()">
                        <i class="fas fa-pause"></i>
                    </button>
                </div>

                <div class="pr-1">
                    <button type="button" class="btn btn-primary" @click="stop()">
                        <i class="fas fa-stop"></i>
                    </button>
                </div>

                <div class="flex-grow-1 pl-5">
                    <el-slider v-model="songPercent" @change="skipToPercent($event)"></el-slider>
                </div>
            </div>
        </div>
    </div>

    <!-- <pre>{{ props.value }}</pre> -->
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
            if (! this.props.value) return [];
            if (! this.props.value.items) return [];
            if (this.props.value.items.length==0) return [];
            
            let items = this.props.value.items.filter(item => {
                return item.percent>=this.songPercent && item.type=='lyric';
            });

            // Ultima frase permanece
            if (items.length==0) {
                items = this.props.value.items.filter(item => {
                    return item.type=='lyric';
                });

                if (items.length>0) {
                    items = [items[items.length-1]];
                }
            }

            return items;
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

        playerInit() {
            let _playerInit = () => {
                console.log('playerInit');
                
                this.player = new MidiPlayer.Player(ev => {
                    this.songPercent = this.player.getCurrentTick() * 100 / this.player.totalTicks;
                    this.$emit('songPercent', this.songPercent);
                    
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