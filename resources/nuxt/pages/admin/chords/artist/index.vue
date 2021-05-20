<template><div>
    <ui-table v-bind="search">
        <template #header>
            <th>Artista/Músico</th>
            <th>Alterado em</th>
        </template>

        <template #item="{item}">
            <td>{{ item.name }}</td>
            <td><ui-timeago v-model="item.updated_at"></ui-timeago></td>
        </template>

        <template #actions="{item}">
            <nuxt-link :to="`/admin/chords/artist/${item.id}`" class="btn btn-primary">
                <i class="fas fa-fw fa-edit"></i>
            </nuxt-link>

            <a href="javascript:;" class="btn btn-danger">
                <i class="fas fa-fw fa-times"></i>
            </a>
        </template>
    </ui-table>

    <pre>{{ $data }}</pre>

    <ui-actions>
        <nuxt-link to="/admin/chords/artist/0" class="btn btn-primary">Novo</nuxt-link>
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
            this.$axios.get('/api/chords-artist/search', {params:this.params}).then(resp => {
                this.search = resp.data;
            });
        },
    },

    mounted() {
        this.getSearch();
    },
}
</script>