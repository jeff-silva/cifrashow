<template><div>
    
    <!-- Artista -->
    <div v-if="model">
    
        <!-- Cover -->
        <div v-if="model.cover && model.cover.url">
            <img :src="model.cover.url" alt="" width="100%" style="width:100%; max-height:300px; object-fit:cover;">
        </div>

        <div class="container">
            <h1>{{ model.name }}</h1>
        </div>
    </div>
</div></template>

<script>
export default {
    data() {
        return {
            model: false,
        };
    },

    async fetch() {
        this.model = await this.$axios.$get(`/api/chords-artist/find/${this.$route.params.slug}`);
    },
}
</script>