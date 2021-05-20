<template><div>
    <div class="row no-gutters">
        <div class="col-3">
            <div class="list-group list-group-flush">
                <div class="list-group-item" :class="{'list-group-item-primary':m==midi}" v-for="m in midis" @click="midi=m">
                    {{ m.title }}
                </div>
            </div>
        </div>

        <div class="col-9 p-3">
            <!-- <midi-player :src="midi.src" v-if="midi"></midi-player> -->
            <!-- <midiplayer class="border mb-3" :src="midi.src"></midiplayer> -->
            <midiplayer class="border mb-3" :src="midi.src" :edit="true" v-model="midi"></midiplayer>
        </div>
    </div>
    <!-- <pre>{{ $data }}</pre> -->
</div></template>

<script>
export default {
    data() {
        let data = {};
        
        data.midi = false;
        data.midis = [
            {
                title: "Bach - Boureé",
                src: "/assets/bach-bourree.mid",
                items: [],
            },
            {
                title: "Guns n Roses - Sweet Child o Mine",
                src: "/assets/guns-n-roses-sweet-child-o-mine.mid",
                items: [],
            },
            {
                title: "Raça Negra - Cheia de Manias",
                src: "/assets/raca-negra-cheia-de-manias.mid",
                items: [
                    {
                        percent: 15,
                        type: "chord",
                        value: "F#m",
                    },
                    {
                        percent: 20,
                        type: "chord",
                        value: "E",
                    },
                    {
                        percent: 16,
                        type: "lyric",
                        value: "Cheia de manias",
                    },
                    {
                        percent: 22,
                        type: "lyric",
                        value: "Toda dengosa",
                    },
                ],
            },
            {
                title: "Tema Simpsons",
                src: "/assets/simpsons.mid",
                items: [],
            },
            {
                title: "Tema South Park",
                src: "/assets/south-park.mid",
                items: [],
            },
        ];

        data.midi = data.midis[2];

        return data;
    },
};
</script>