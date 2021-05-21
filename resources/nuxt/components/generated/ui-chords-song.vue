<template><div>
	<el-select v-model="props.value" :multiple="props.multiple" class="form-control p-0">
		<el-option value="">{{ props.placeholder }}</el-option>
		<el-option :value="i.id" :label="i.name||i.id" v-for="i in items" :key="i.id">{{ i.name||i.id }}</el-option>
	</el-select>
</div></template>

<script>
export default {
	name: "ui-chords-song",
	
	props: {
		value: [Number, String, Array],
		placeholder: {default:'Selecionar'},
		multiple: {default:false},
	},
	
	methods: {
		removeSearch(q='') {
			this.$axios.get('/api/chords-song/search', {params:{q}}).then(resp => {
				this.items = resp.data.data;
			});
		},
	},
	
	data() {
		return {
			props: JSON.parse(JSON.stringify(this.$props)),
			items: [],
		};
	},
	
	mounted() {
		this.removeSearch();
	},
}
</script>