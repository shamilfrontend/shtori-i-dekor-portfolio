<script lang="ts" setup>
defineOptions({ name: 'SidebarContacts' });
</script>

<template>
    <footer class="sidebar-contacts">
        <ul class="sidebar-contacts__list">
            <li class="sidebar-contacts__item">
                <a
                    href="mailto:shtori-i-dekor@mail.ru"
                    class="sidebar-contacts__link"
                    target="_blank"
                >
                    shtori-i-dekor@mail.ru
                </a>
            </li>
            <li class="sidebar-contacts__item">
                <a
                    href="tel:+79165811715"
                    class="sidebar-contacts__link"
                >
                    +7 916 581-17-15
                </a>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
.sidebar-contacts {
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    &__item:not(:last-child) {
        margin-bottom: 8px;
    }

    &__link {
        color: #000;
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;

        &:hover {
            color: #666;
        }
    }
}
</style>
