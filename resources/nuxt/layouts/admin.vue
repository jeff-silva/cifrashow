<template><div style="background:#f5f5f5;">
	<div class="row no-gutters">
		<div class="col-lg-2 bg-dark d-none d-lg-block p-0" style="height:100vh; overflow:auto;">
			<app-nav></app-nav>
		</div>
		<div class="col-12 col-lg-10 p-0">
			<div class="d-flex bg-white p-3 pr-5">
				<div class="d-lg-none">
					<a href="javascript:;">
						<i class="fas fa-fw fa-bars"></i>
					</a>
				</div>
				<div class="flex-grow-1"></div>
				<div>{{ $auth.user.name }}</div>
			</div>
			
			<div class="p-3">
				<nuxt></nuxt>
			</div>
		</div>
	</div>
</div></template>
