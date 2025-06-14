<script lang="ts" setup>
import SidebarSocial from './SidebarSocial/index.vue';
import SidebarContacts from './SidebarContacts/index.vue';

defineOptions({name: 'TheSidebar'});

const menuList = [
    {
        id: 1,
        link: '/',
        name: 'Главная',
    },
    {
        id: 2,
        link: '/about',
        name: 'О нас',
    },
    {
        id: 3,
        link: '/services-and-prices',
        name: 'Услуги и цены',
    },
    {
        id: 4,
        link: '/contacts',
        name: 'Контакты',
    },
];
</script>

<template>
    <div class="the-sidebar">
        <img
            src="/images/logo.png"
            alt="Logo"
            class="the-sidebar__logo"
        />

        <nav class="the-sidebar__nav">
            <ul class="the-sidebar__list">
                <li
                    v-for="item in menuList"
                    :key="item.id"
                    class="the-sidebar__item"
                >
                    <a
                        :href="item.link"
                        class="the-sidebar__link"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <sidebar-social />

        <sidebar-contacts />
    </div>
</template>

<style lang="scss" scoped>
.the-sidebar {
    position: sticky;
    top: 0;
    padding-top: 50px;
    text-align: center;

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
