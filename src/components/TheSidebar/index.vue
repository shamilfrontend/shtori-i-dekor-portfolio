<script lang="ts" setup>
import TheSocial from './TheSocial/index.vue';

defineOptions({name: 'TheSidebar'});

const menuList = [
    {
        id: 1,
        link: '/',
        name: 'Home',
    },
    {
        id: 2,
        link: '/',
        name: 'About Us',
    },
    {
        id: 3,
        link: '/',
        name: 'Services',
    },
    {
        id: 4,
        link: '/',
        name: 'Prices',
    },
    {
        id: 5,
        link: '/',
        name: 'Shop',
    },
    {
        id: 6,
        link: '/',
        name: 'Contact',
    },
];
</script>

<template>
    <div class="sidebar">
        <img
            src="/images/logo.png"
            alt="Logo"
            class="sidebar__logo"
        />

        <nav class="sidebar__nav">
            <ul class="sidebar__list">
                <li
                    v-for="item in menuList"
                    :key="item.id"
                    class="sidebar__item"
                >
                    <a
                        :href="item.link"
                        class="sidebar__link"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <the-social />
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    text-align: center;
    padding-top: 50px;

    &__logo {
        width: 130px;
        margin-bottom: 48px;
    }

    &__list {
        text-align: center;
        list-style: none;
        padding: 0;
        margin: 0;

        @media (max-width: 1200px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }

    &__item {
        padding: 13px 20px;

        @media (max-width: 1200px) {
            padding: 0;
        }
    }

    &__link {
        text-decoration: none;
        color: #6e6e6e;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 300;
        transition: all 0.3s linear;

        &:active {
            color: #000;

            @media (max-width: 1200px) {
                display: block;
                color: #fff;
                background-color: #000;
            }
        }

        &:hover {
            color: #000;
        }

        @media (max-width: 1200px) {
            display: block;
            padding: 10px 20px;
            font-size: 16px;
            text-transform: capitalize;
            transition: none;
        }
    }

    &__social {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;

        .social__item {
            &:not(:last-child) {
                margin-right: 10px;
            }
        }

        .social__icon {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 1200px) {
            display: none;
        }
    }
}
</style>
