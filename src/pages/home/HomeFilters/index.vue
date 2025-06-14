<template>
    <header class="home-filters">
        <nav class="home-filters__nav">
            <ul class="home-filters__list">
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Все</a>
                </li>
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Меню 1</a>
                </li>
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Меню 2</a>
                </li>
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Меню 3</a>
                </li>
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Меню 4</a>
                </li>
                <li class="home-filters__item">
                    <a href="" class="home-filters__link">Меню 5</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
defineOptions({ name: 'HomeFilters' });
</script>

<style lang="scss" scoped>
.home-filters {
    &__list {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px 40px;
        margin-bottom: 50px;
        padding: 0;
    }

    &__link {
        text-decoration: none;
        color: #6e6e6e;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 2px;
        font-weight: 300;
        transition: all 0.3s linear;

        &:active {
            color: #000;
        }

        &:hover {
            color: #000;
        }

        @media (max-width: 1200px) {
            font-size: 14px;
        }
    }
}
</style>