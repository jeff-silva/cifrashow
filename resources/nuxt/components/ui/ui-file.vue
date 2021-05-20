<template><div class="ui-file">
    <label class="input-group">
        <div class="input-group-prepend"><div class="input-group-text">
            <i class="fas fa-fw fa-upload"></i>
        </div></div>

        <div class="form-control">{{ placeholder }}</div>

        <input type="file" style="display:none!important;" @change="handleFile($event)">
    </label>
</div></template>

<script>
export default {
    props: {
        value: {default:''},
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
            const reader = new FileReader();
            reader.readAsDataURL(ev.target.files[0]);
            reader.onload = () => {
                this.props.value = reader.result;
                this.emitValue();
            }
        },
    },

    computed: {
        placeholder() {
            if (! this.props.value) return 'Sem arquivo';
            return this.props.value.split(';')[0];
        },
    },
}
</script>