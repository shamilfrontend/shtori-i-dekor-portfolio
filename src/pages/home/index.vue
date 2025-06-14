<script setup lang="ts">
defineOptions({ name: 'HomePage' })
</script>

<template>
    <div class="home-page">
        <div class="works">
            <div class="works__item">
                <img src="/images/gallery-01.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-02.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-03.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-04.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-05.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-06.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-07.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-08.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-09.jpg" alt="" class="works__item-img"/>
            </div>
            <div class="works__item">
                <img src="/images/gallery-10.jpg" alt="" class="works__item-img"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-page {
    // code
}

.works {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    columns: 3;
    gap: 32px;

    &__item {
        width: 100%;
        break-inside: avoid;
        margin-bottom: 32px;

        &-img {
            display: block;
        }
    }

    @media (max-width: 1200px) {
        columns: 2;
        column-gap: 30px;
    }

    @media (max-width: 700px) {
        columns: 1;
    }
}
</style>
