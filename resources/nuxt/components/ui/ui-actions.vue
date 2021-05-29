<template><div class="ui-actions mt-4">

    <!-- Desktop -->
    <div class="ui-actions-desktop d-none d-lg-block">
        <slot></slot>
    </div>

    <!-- Mobile -->
    <div class="ui-actions-mobile bg-white shadow d-lg-none">
        <div class="d-flex d-md-block p-md-1">
            <slot></slot>
        </div>
    </div>
</div></template>

<style module>
.ui-actions-desktop {text-align:right;}
.ui-actions-mobile {position:fixed; bottom:0px; left:0px; width:100%; z-index:999;}
.ui-actions-mobile .d-flex > * {flex-grow:1;}
.ui-actions-mobile .btn {border-radius:0px !important;}
</style>