<template>
    <div v-if="props.value && props.value.items">
        <div style="position:relative; overflow-x:scroll;" @mousemove="mousemoveHandler($event)">
            <svg :width="props.zoomX+'%'" height="40px" ref="referenceArea">

                <g :transform="`translate(0, ${i.y}) rotate(0)`" v-for="i in itemTypes">

                    <!-- Track background -->
                    <rect x="0" y="0" width="100%" height="20"
                        style="fill:#eee; stroke-width:1; stroke:#ddd;"
                        @click="itemAdd($event, i)"
                    ></rect>

                    <!-- Dots -->
                    <circle :cx="ii.percent+'%'" cy="10" r="8"
                        style="fill:#ddd; stroke-width:1; stroke:#ccc; cursor:pointer;"
                        v-for="ii in props.value.items" v-if="ii.type==i.type" :title="i.type"
                        @click="item=ii" @mousedown="drag=ii" @mouseup="drag=false"
                    ></circle>
                </g>

                <!-- Cursor -->
                <line :x1="props.songPercent+'%'" y1="0" :x2="props.songPercent+'%'" y2="100%" style="stroke:#f00; stroke-width:1;" />
            </svg>
        </div>

        <div v-if="item" class="input-group">
            <input type="text" class="form-control" v-model="item.value" @keyup.enter="item=false; emitValue();">

            <div class="input-group-append"><div class="input-group-btn">
                <button type="button" class="btn btn-primary" @click="item=false; emitValue();">Ok</button>
            </div></div>

            <div class="input-group-append"><div class="input-group-btn">
                <button type="button" class="btn btn-danger" @click="itemRemove(item)">
                    <i class="fas fa-fw fa-times"></i>
                </button>
            </div></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {default:Object},
        zoomX: {default:100},
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
            item: false,
            drag: false,
            selectArea: {show:false, bind:{x:0, y:0, width:50, height:50}},
            itemTypes: [
                {type:"chord", y:0, label:"Acordes"},
                {type:"lyric", y:20, label:"Letras"},
            ],
        };
    },

    methods: {
        emitValue() {
            this.$emit('input', this.props.value);
        },

        getMousePercent(ev) {
            let rect = this.$refs.referenceArea.getBoundingClientRect();
            return {
                x: (ev.layerX * 100 / rect.width),
                y: (ev.layerY * 100 / rect.height),
            };
        },

        mousemoveHandler(ev) {
            let {x, y} = this.getMousePercent(ev);

            // drag dots
            if (this.drag && ev.buttons==1) {
                this.drag.percent = x;
            }
        },

        itemAdd(ev, itemType) {
            let {x, y} = this.getMousePercent(ev);
            this.item = {percent:x, type:itemType.type, value:""};
            this.props.value.items.push(this.item);
            this.emitValue();
        },

        itemRemove(item) {
            let index = this.props.value.items.indexOf(item);
            this.props.value.items.splice(index, 1);
            this.emitValue();
            this.item = false;
        },
    },
}
</script>