<template><div class="app-nav">
    <el-menu :collapse="collapse"
        background-color="transparent"
        text-color="#444"
        class="border-0"
    >
        <template v-for="(i, index) in navItems">

            <!-- Single -->
            <template v-if="i.children.length==0">
                <el-menu-item :index="index">
                    <nuxt-link :to="i.to" class="d-block" style="color:var(--dark)!important; text-decoration:none;">
                        <i v-if="i.icon" :class="i.icon"></i>
                        <span>{{ i.label }}</span>
                    </nuxt-link>
                </el-menu-item>
            </template>

            <!-- Submenu -->
            <el-submenu :index="index" v-else>
                <template slot="title">
                    <i v-if="i.icon" :class="i.icon"></i>
                    <span>{{ i.label }}</span>
                </template>

                <template v-for="(ii, iindex) in i.children">
                    <el-menu-item :index="index+'-'+iindex">
                        <nuxt-link :to="ii.to" class="d-block" style="color:var(--dark)!important; text-decoration:none;">
                            <i v-if="ii.icon" :class="ii.icon"></i>
                            <span>{{ ii.label }}</span>
                        </nuxt-link>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</div></template>

<script>
export default {
    props: {
        collapse: {default:false},
    },

    computed: {
        navItems() {
            let items = [];

            items.push({
                label: "Dashboard",
                to: "/admin",
                icon: "fas fa-fw fa-poll",
                children: [],
            });

            items.push({
                label: "Chords",
                to: "",
                icon: "fas fa-fw fa-guitar",
                children: [
                    {
                        label: "Artistas",
                        to: "/admin/chords/artist/",
                        icon: false,
                        children: []
                    },
                    {
                        label: "Cifras",
                        to: "/admin/chords/song/",
                        icon: false,
                        children: []
                    },
                ],
            });

            items.push({
                label: "Configurações",
                to: "/admin/settings",
                icon: "fas fa-fw fa-cog",
                children: [],
            });

            items.push({
                label: "Sair",
                to: false,
                icon: "fas fa-fw fa-power-off",
                children: [],
            });

            return items;
        },
    },
}
</script>

<style lang="scss">
.app-nav * {border:solid 1px red !important;}
</style>