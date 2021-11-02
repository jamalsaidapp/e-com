<template>
    <div class="wrapper">
        <pre-loader />
        <e-header />
        <e-main />
        <e-footer />
        <quick-view />
        <e-mobile-menu />
        <scroll-button />
    </div>
</template>

<script>
import PreLoader from "../../components/Frontend/PreLoader.vue";
import QuickView from "../../components/Frontend/QuickView.vue";
import ScrollButton from "../../components/Frontend/ScrollButton.vue";
import EFooter from "../Extends/EFooter.vue";
import EHeader from "../Extends/EHeader.vue";
import EMain from "../Extends/EMain.vue";
import EMobileMenu from "../Extends/EMobileMenu.vue";

export default {
    name: "App",
    components: {
        EHeader,
        EFooter,
        EMain,
        EMobileMenu,
        QuickView,
        ScrollButton,
        PreLoader,
    },
};
</script>

<style lang="scss" scoped></style>
