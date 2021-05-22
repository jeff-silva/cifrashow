<template>
    <div class="ui-file">

        <!-- Edit -->
        <div class="input-group form-control p-0" v-if="props.value && props.value.name && props.value.url">
            <div class="input-group-btn">
                <button type="button" class="btn">
                    <i class="fas fa-fw" :class="computedIcon"></i>
                </button>
            </div>

            <input type="text" class="form-control border-0" v-model="props.value.name" placeholder="Nome do arquivo" @input="emitValue()">

            <div class="input-group-btn">
                <button type="button" class="btn btn-danger rounded-0" @click="props.value={}; emitValue();">
                    <i class="fas fa-fw fa-times"></i>
                </button>
            </div>
        </div>

        <!-- Empty -->
        <label class="input-group form-control p-0" v-else>
            <div class="input-group-btn">
                <a href="javascript:;" class="btn">
                    <i class="fas fa-fw fa-upload"></i>
                </a>
                <input type="file" style="display:none!important;" @change="handleFile($event)">
            </div>
            <div class="form-control border-0">Selecionar arquivo</div>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {default:{}},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },

    methods: {
        emitValue() {
            this.$emit('input', this.props.value);
        },

        handleFile(ev) {
            let file = ev.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.props.value = {
                    name: file.name.split('.').slice(0, -1).join('.'),
                    filename: file.name,
                    size: file.size,
                    type: file.type,
                    url: reader.result,
                };
                this.emitValue();
            }
        },
    },

    computed: {
        computedIcon() {
            let icon = 'fa-upload';

            if (this.props.value && this.props.value.type) {
                icon = this.props.value.type.split('/')[0];

                if (icon=='audio') {
                    icon = 'fa-file-audio';
                }
                else if (icon=='image') {
                    icon = 'fa-image';
                }
                else {
                    icon = 'fa-file';
                }
            }

            return icon;
        },
    },
}
</script>