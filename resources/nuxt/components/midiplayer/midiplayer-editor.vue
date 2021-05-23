<!-- http://grimmdude.com/MidiPlayerJS/docs/Track.html#disable -->
<template><div>

    <!-- Editor -->
    <div v-if="props.edit" @wheel.prevent="editor.zoomX += (($event.deltaY*-1)/10)">
        <midiplayer-svg v-model="props.value"
            @input="emitValue()"
            :zoom-x="editor.zoomX" :song-percent="songPercent"
        ></midiplayer-svg>
    </div>

    <!-- Player -->
    <div>
        <div class="d-flex align-items-center mt-3">
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

            <div class="flex-grow-1 pl-3">
                <el-slider v-model="songPercent" @change="skipToPercent($event)"></el-slider>
            </div>
        </div>
    </div>
</div></template>

<script>
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';

export default {
    props: {
        value: {default:Object},
        edit: {default:false},
        // soundfont: {default:'marimba'}, // acoustic_grand_piano, marimba
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
            this.playerInit();
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
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

        playerInit() {
            if (this.props.value && this.props.value.midi && this.props.value.midi.url) {
                if (this.lastPropsValueMidiUrl != this.props.value.midi.url) {
                    this.lastPropsValueMidiUrl = this.props.value.midi.url;

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

                    Soundfont.instrument(new AudioContext(), 'marimba').then(instrument => {
                        this.instrument = instrument;
                    });
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