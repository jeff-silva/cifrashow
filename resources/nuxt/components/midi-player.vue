<template><div>

    <div class="border border-primary" v-if="midi">
        <div class="bg-primary">Midi Player - {{ midi.header.name }}</div>
        <div class="bg-light">
            <a href="javascript:;" @click="play()">play</a>
            <a href="javascript:;" @click="stop()">stop</a>
        </div>

        <div class="row no-gutters">
            <div class="col-3">
                <div class="list-group list-group-flush">
                    <label class="list-group-item p-1" v-for="(t, tindex) in midi.tracks">
                        <input type="checkbox" v-model="tracksToPlay" :value="tindex">
                        {{ t.instrument.name }} ({{ t.instrument.family }})
                    </label>
                </div>
            </div>

            <div class="col-9 bg-dark">
                Aaa
            </div>
        </div>


        <pre>{{ midiDuration }}</pre>
        <pre>{{ tracksToPlay }}</pre>
        <pre>{{ midi }}</pre>
    </div>

</div></template>

<script>
import { Midi } from '@tonejs/midi';
import * as Tone from 'tone';

export default {
    props: {
        src: String,
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
            this.midiInit();
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
            midi: false,
            tracksToPlay: [],
            synths: [],
        };
    },

    methods: {
        async midiInit() {
            if (!this.props.src) return;
            this.midi = await Midi.fromUrl(this.props.src);
            this.midiDuration = 0;
            this.tracksToPlay = [ ...Array(this.midi.tracks.length).keys() ];
            this.synths = [];
        },

        play() {
            const now = Tone.now() + 0.5;
            this.midi.tracks.forEach((track, trackIndex) => {
                if (! this.tracksToPlay.includes(trackIndex)) return;

                //create a synth for each track
                const synth = new Tone.PolySynth(Tone.Synth, {
                    envelope: {
                        attack: 0.02,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1,
                    },
                }).toDestination();

                this.synths.push(synth);

                track.notes.forEach((note) => {
                    synth.triggerAttackRelease(
                        note.name,
                        note.duration,
                        note.time + now,
                        note.velocity
                    );
                });
            });
        },

        stop() {
            while (this.synths.length) {
                const synth = this.synths.shift();
                synth.disconnect();
            }
        },
    },

    mounted() {
        this.midiInit();
    },
}
</script>