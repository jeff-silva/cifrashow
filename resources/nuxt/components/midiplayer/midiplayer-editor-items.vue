<template><div v-if="$parent.props.value && $parent.props.value.items">
    <div style="position:relative; overflow-x:scroll;" @mousemove="mousemoveHandler($event)"
        @wheel.prevent="zoomX += (($event.deltaY*-1)/10)"
    >
        <svg :width="zoomX+'%'" height="40px" ref="referenceArea">

            <g :transform="`translate(0, ${i.y}) rotate(0)`" v-for="i in itemTypes" @mousemove="itemNew.type=i.type">

                <!-- Track background -->
                <rect x="0" y="0" width="100%" height="20"
                    class="midiplayer-editor-items-track"
                    :class="{'midiplayer-editor-items-track-active':itemNew.type==i.type}"
                    @click="itemAddHandle($event, i)"
                ></rect>

                <!-- Dots -->
                <circle :cx="ii.percent+'%'" cy="10" r="8"
                    class="midiplayer-editor-items-dot"
                    :class="{'midiplayer-editor-items-dot-active':(ii==itemEdit)}"
                    v-for="ii in $parent.props.value.items" v-if="ii.type==i.type" :title="i.type"
                    @click="itemEdit=ii" @mousedown="drag=ii" @mouseup="drag=false;"
                ></circle>
            </g>

            <!-- Cursor -->
            <line :x1="props.songPercent+'%'" y1="0" :x2="props.songPercent+'%'" y2="100%" style="stroke:#f00; stroke-width:1;" />
        </svg>
    </div>

    <div>
        <div v-if="itemEdit" class="input-group">
            <input type="text" class="form-control" v-model="itemEdit.value" @keyup.enter="itemEdit=false;">

            <div class="input-group-append"><div class="input-group-btn">
                <button type="button" class="btn btn-primary" @click="itemEdit=false;">Ok</button>
            </div></div>

            <div class="input-group-append"><div class="input-group-btn">
                <button type="button" class="btn btn-danger" @click="itemRemove(itemEdit)">
                    <i class="fas fa-fw fa-times"></i>
                </button>
            </div></div>
        </div>

        <div v-else>
            <button type="button" class="btn btn-primary" @click="itemAdd({percent:songPercent, type:itemNew.type, value:''})">
                Adicionar marcador agora
            </button>
        </div>
    </div>
</div></template>


<script>
export default {
    props: {
        songPercent: {default:0},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
            zoomX: 100,
            itemNew: {percent:0, type:false, value:''},
            itemEdit: false,
            drag: false,

            selectArea: {show:false, bind:{x:0, y:0, width:50, height:50}},
            itemTypes: [
                {type:"chord", y:0, label:"Acordes"},
                {type:"lyric", y:20, label:"Letras"},
            ],
        };
    },

    methods: {
        getMousePercent(ev) {
            let rect = this.$refs.referenceArea.getBoundingClientRect();
            return {
                x: (ev.layerX * 100 / rect.width),
                y: (ev.layerY * 100 / rect.height),
            };
        },

        mousemoveHandler(ev) {
            let {x, y} = this.getMousePercent(ev);
            this.itemNew.percent = x;

            // drag dots
            if (this.drag && ev.buttons==1) {
                this.drag.percent = x;
            }
        },

        itemAddHandle(ev, itemType) {
            let {x, y} = this.getMousePercent(ev);
            this.itemAdd({percent:x, type:itemType.type, value:""});
        },

        // item = {percent:35, type:"chord", value:"G#"};
        itemAdd(item) {
            this.itemEdit = item;
            this.$parent.itemAdd(this.itemEdit);
        },

        itemRemove(item) {
            this.$parent.itemRemove(item);
            this.itemEdit = false;
        },
    },
}
</script>


<style>
:global .aaa {outline:solid 1px red;}
:global .midiplayer-editor-items-track {fill:#eee; stroke-width:1; stroke:#ddd;}
:global .midiplayer-editor-items-track-active {fill:#bbf;}
:global .midiplayer-editor-items-dot {fill:#ddd; stroke-width:1; stroke:#ccc; cursor:pointer;}
:global .midiplayer-editor-items-dot-active {fill:#88f; stroke:#88f;}
</style>