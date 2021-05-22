<template><div style="background:#f5f5f5;">
	<div class="row no-gutters">
		<div class="col-lg-2 bg-white shadow-sm d-none d-lg-block p-0" style="height:100vh; overflow:auto;">
			<app-nav :collapse="navCollapse"></app-nav>
		</div>
		<div class="col-12 col-lg-10 p-0">
			<div class="d-flex bg-white px-4 py-2">
				<div class="d-lg-none">
					<a href="javascript:;" @click="drawer=true" class="text-dark">
						<i class="fas fa-fw fa-bars"></i>
					</a>
				</div>
				<div class="flex-grow-1"></div>
				<div>
					<el-dropdown trigger="click">
						<span class="el-dropdown-link">
							{{ $auth.user.name }}
							<i class="fas fa-chevron-down ml-3"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<!-- <el-dropdown-item>Action 1</el-dropdown-item> -->
							<!-- <el-dropdown-item divided>Sair</el-dropdown-item> -->
							<el-dropdown-item>Sair</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			
			<div class="p-3">
				<nuxt></nuxt>
			</div>
		</div>
	</div>

	<el-drawer
		:title="false"
		:with-header="false"
		direction="ltr"
		:visible.sync="drawer"
	>
		<app-nav></app-nav>
	</el-drawer>
</div></template>

<script>
export default {
	data() {
		return {
			drawer: false,
			navCollapse: false,
		};
	},
}
</script>