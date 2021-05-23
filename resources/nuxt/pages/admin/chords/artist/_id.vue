<template><div>
    <ui-form method="post" action="/api/chords-artist/save" v-model="model" @success="handleSucccess($event)">
        <ui-field label="Capa">
            <ui-file v-model="model.cover"></ui-file>
            <img :src="model.cover.url" alt="" width="100%" v-if="model.cover">
        </ui-field>

        <ui-field label="Artista/Banda">
            <input type="text" class="form-control" v-model="model.name">
        </ui-field>

        <ui-actions>
            <nuxt-link to="/admin/chords/artist" class="btn">Voltar</nuxt-link>

            <button type="submit" class="btn btn-primary">
                <i class="fas fa-fw fa-save"></i> Salvar
            </button>
        </ui-actions>
    </ui-form>
</div></template>

<script>
export default {
    layout: 'admin',
    middleware: 'auth',

    data() {
        return {
            model: {url:""},
        };
    },

    methods: {
        handleSucccess(model) {
            this.$swal('Artista salvo', '', 'success');
            this.$router.push(`/admin/chords/artist/${model.id}`);
        },

        loadModel() {
            if (0==+this.$route.params.id) return;
            this.$axios.get(`/api/chords-artist/find/${this.$route.params.id}`).then(resp => {
                this.model = resp.data;
            });
        },
    },

    mounted() {
        this.loadModel();
    },
}
</script>