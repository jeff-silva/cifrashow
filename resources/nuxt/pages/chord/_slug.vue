<template><div>
    
    <!-- Música -->
    <div v-if="model">

        <!-- Cover -->
        <div v-if="model.chords_artist && model.chords_artist.cover && model.chords_artist.cover.url">
            <img :src="model.chords_artist.cover.url" alt="" width="100%" style="width:100%; max-height:300px; object-fit:cover;">
        </div>

        <div class="container">
            <h1>{{ model.name }}</h1>
            <h2 v-if="model.chords_artist">{{ model.chords_artist.name }}</h2>

            <midiplayer :value="model"></midiplayer>
        </div>
    </div>
</div></template>

<script>
export default {
    head() {
        return {
            title: (this.model? this.model.name: 'Música não encontrada'),
        };
    },

    data() {
        return {
            model: false,
        };
    },

    async fetch() {
        this.model = await this.$axios.$get(`/api/chords-song/find/${this.$route.params.slug}`);
    },
}
</script>