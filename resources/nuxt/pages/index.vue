<template><div>
    <div class="row no-gutters">
        <div class="col-3">
            <div class="list-group">
                <div class="list-group-item" :class="{'list-group-item-primary':m==midi}" v-for="m in midis" @click="midi=m">
                    {{ m.title }}
                </div>
            </div>
        </div>

        <div class="col-9 p-3">
            <!-- <midi-player :src="midi.src" v-if="midi"></midi-player> -->
            <!-- <midi-playerb class="border mb-3" :src="midi.src"></midi-playerb> -->
            <midi-playerb class="border mb-3" :src="midi.src" :edit="true"></midi-playerb>
        </div>
    </div>
    <pre>{{ $data }}</pre>
</div></template>

<script>
export default {
    data() {
        return {
            midi: {src:false, title:false},
            midis: [
                {
                    title: "Bach - Boureé",
                    src: "/assets/bach-bourree.mid",
                },
                {
                    title: "Guns n Roses - Sweet Child o Mine",
                    src: "/assets/guns-n-roses-sweet-child-o-mine.mid",
                },
                {
                    title: "Raça Negra - Cheia de Manias",
                    src: "/assets/raca-negra-cheia-de-manias.mid",
                },
                {
                    title: "Tema Simpsons",
                    src: "/assets/simpsons.mid",
                },
                {
                    title: "Tema South Park",
                    src: "/assets/south-park.mid",
                },
            ],
        };
    },
};
</script>