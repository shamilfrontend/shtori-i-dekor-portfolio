<script lang="ts" setup>
import type { PortfolioItem } from "../../data/portfolio";

defineOptions({ name: "PortfolioCard" });

defineProps<{
  item: PortfolioItem;
}>();
</script>

<template>
  <router-link
    :to="`/portfolio/${item.slug}`"
    class="portfolio-card"
  >
    <span class="portfolio-card__image">
      <img :src="item.image" :alt="item.title" />
    </span>
    <span class="portfolio-card__name">{{ item.title }}</span>
    <span class="portfolio-card__branches">{{ item.roles.join(" / ") }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.portfolio-card {
  display: inline-block;
  position: relative;
  z-index: 10;
  margin: 0 10% 84px 0;
  width: 45%;
  padding: 45% 0 0;
  text-decoration: none;
  color: inherit;
  vertical-align: top;
  transition: opacity 0.35s, transform 0.35s;

  &:nth-child(2n) {
    top: 50px;
    margin-right: 0;
  }

  &__image {
    position: absolute;
    inset: 0;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
  }

  &:hover &__image img {
    transform: scale(1.06);
  }

  &__name {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding: 25px 25px 20px;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.6;
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  }

  &__branches {
    position: absolute;
    left: 27px;
    right: 20px;
    bottom: 30px;
    padding: 0 0 0 25px;
    font-size: 13px;
    line-height: 19px;
    color: #fff;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Ccircle cx='7' cy='4' r='2.2' fill='white'/%3E%3Cpath d='M2 12c0-2.5 2.2-4 5-4s5 1.5 5 4' stroke='white' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")
      0 5px no-repeat;
  }

  @media (max-width: 1200px) {
    width: 47%;
    margin: 0 6% 40px 0;

    &:nth-child(2n) {
      top: 24px;
      margin-right: 0;
    }

    &__name {
      font-size: 18px;
      padding: 18px;
    }

    &__branches {
      left: 18px;
      bottom: 18px;
      font-size: 12px;
    }
  }
}
</style>
