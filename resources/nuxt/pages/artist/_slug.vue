<template><div>
    
    <!-- Artista -->
    <div v-if="model">
    
        <!-- Cover -->
        <div v-if="model.cover && model.cover.url" class="mb-3">
            <img :src="model.cover.url" alt="" width="100%" style="width:100%; max-height:300px; object-fit:cover;">
        </div>

        <div class="container">
            <h1 class="mb-3">{{ model.name }}</h1>

            <div v-for="s in songs.data" class="mb-3">
                <midiplayer :value="s"></midiplayer>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    head() {
        return {
            title: (this.model? this.model.name: 'Artista não encontrado'),
        };
    },

    data() {
        return {
            model: false,
            songs: [],
        };
    },

    async fetch() {
        this.model = await this.$axios.$get(`/api/chords-artist/find/${this.$route.params.slug}`);
        if (this.model && this.model.id) {
            this.songs = await this.$axios.$get(`/api/chords-song/search/?artist_id=${this.model.id}`);
        }
    },
}
</script>