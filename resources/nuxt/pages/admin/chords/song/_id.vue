<template><div>
    <ui-form method="post" action="/api/chords-song/save" v-model="model" @success="handleSucccess($event)"
        #default="{loading}">

        <ui-field label="Artista/Banda">
            <ui-chords-artist v-model="model.artist_id"></ui-chords-artist>
        </ui-field>

        <ui-field label="Música">
            <input type="text" class="form-control" v-model="model.name">
        </ui-field>

        <ui-field label="Arquivo MIDI">
            <ui-file v-model="model.midi"></ui-file>
        </ui-field>

        <midiplayer-editor v-model="model" class="my-3"></midiplayer-editor>

        <ui-actions>
            <nuxt-link to="/admin/chords/song" class="btn">Voltar</nuxt-link>

            <button type="submit" class="btn btn-primary">
                <span v-if="loading" v-html="loading"></span>
                <i v-else class="fas fa-fw fa-save"></i>
                Salvar
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
            model: {},
        };
    },

    methods: {
        handleSucccess(model) {
            this.$swal('Cifra salva', '', 'success');
            this.$router.push(`/admin/chords/song/${model.id}`);
        },

        loadModel() {
            if (0==+this.$route.params.id) return;
            this.$axios.get(`/api/chords-song/find/${this.$route.params.id}`).then(resp => {
                this.model = resp.data;
            });
        },
    },

    mounted() {
        this.loadModel();
    },
}
</script>