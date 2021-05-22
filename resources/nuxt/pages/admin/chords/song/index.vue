<template><div>
    <ui-table v-bind="search">
        <template #header>
            <th>Música</th>
            <th width="200px">Artista</th>
            <th width="150px">Alterado em</th>
        </template>

        <template #item="{item}">
            <td><nuxt-link :to="item.link.profile">{{ item.name }}</nuxt-link></td>
            <td><div v-if="item.chords_artist">
                {{ item.chords_artist.name }}
            </div></td>
            <td><ui-timeago v-model="item.updated_at"></ui-timeago></td>
        </template>

        <template #actions="{item}">
            <nuxt-link :to="`/admin/chords/song/${item.id}`" class="btn btn-primary">
                <i class="fas fa-fw fa-edit"></i>
            </nuxt-link>

            <a href="javascript:;" class="btn btn-danger">
                <i class="fas fa-fw fa-times"></i>
            </a>
        </template>
    </ui-table>

    <ui-actions>
        <nuxt-link to="/admin/chords/song/0" class="btn btn-primary">Novo</nuxt-link>
    </ui-actions>
</div></template>

<script>
export default {
    layout: 'admin',

    data() {
        return {
            params: {},
            search: {data:[]},
        };
    },

    methods: {
        getSearch() {
            this.$axios.get('/api/chords-song/search', {params:this.params}).then(resp => {
                this.search = resp.data;
            });
        },
    },

    mounted() {
        this.getSearch();
    },
}
</script>