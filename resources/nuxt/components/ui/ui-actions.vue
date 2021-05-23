<template><div class="ui-actions">

    <!-- Desktop -->
    <div class="text-right d-none d-lg-block">
        <slot></slot>
    </div>

    <!-- Mobile -->
    <div class="ui-actions-mobile bg-white text-center d-lg-none">
        <div class="d-flex d-md-block p-md-1">
            <slot></slot>
        </div>
    </div>
</div></template>

<style lang="scss">
.ui-actions * {border:solid 1px red;}
.ui-actions-mobile {position:fixed; bottom:0px; left:0px; width:100%; z-index:999; box-shadow:0 -3px 3px -2px rgb(0 0 0 / 10%) !important;}
.ui-actions .d-flex > * {flex-grow:1;}
.ui-actions .btn {border-radius:0px !important;}
</style>