<script lang="ts" setup>
import TheSidebar from './components/TheSidebar/index.vue';

defineOptions({ name: 'App' });
</script>

<template>
    <div class="wrapper">
        <the-sidebar/>

        <div class="main">
            <div class="main__inner">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    height: auto;
}

.wrapper {
    font-family: "Jost", sans-serif;
    display: grid;
    grid-template-columns: 350px 1fr;
    overflow: hidden;
    min-height: 100vh;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
}

.main {
    padding-top: 48px;
    padding-bottom: 48px;

    &__inner {
        min-height: calc(100vh - 48px - 48px - 20px);
        padding-bottom: 32px;
    }

    @media (max-width: 1200px) {
        margin-left: 50px;
        padding-bottom: 15px;
    }

    @media (max-width: 800px) {
        margin-right: 15px;
        margin-left: 15px;
    }
}
</style>
