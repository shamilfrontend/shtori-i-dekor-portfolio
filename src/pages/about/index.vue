<script setup lang="ts">
defineOptions({ name: "AboutPage" });
</script>

<template>
  <div class="about-page">
    <h1>О нас</h1>

    <div class="about-page__content">
      <div class="about-page__text">
        <p>
          «Шторы и декор» — мастерская текстильного оформления интерьеров в
          Балашихе. Мы занимаемся полным циклом: от дизайна и подбора тканей до
          пошива, монтажа и декора.
        </p>
        <p>
          Работаем с квартирами, загородными домами и общественными пространствами.
          Среди проектов — панорамные окна небоскрёбов, номера отелей с нестандартной
          геометрией и уютные семейные интерьеры, где текстиль должен звучать в
          унисон с росписью и отделкой.
        </p>
        <p>
          Для нас важны точный замер, аккуратный пошив и бережный монтаж. Подбираем
          ткани с учётом света, стиля и повседневного удобства — чтобы шторы и декор
          служили долго и радовали каждый день.
        </p>
      </div>

      <figure class="about-page__media">
        <img
          src="/works/river-tower/6.jpg"
          alt="Шторы и тюль в интерьере с панорамными окнами — проект River Tower"
        />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/mixins" as *;

.about-page {
  @include page-padding;

  h1 {
    @include page-title;
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 48px;
    align-items: start;

    @media (max-width: $bp-desktop) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &__text {
    max-width: 560px;

    p {
      margin: 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-navy);

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  &__media {
    margin: 0;
    overflow: hidden;

    @media (min-width: #{$bp-desktop + 1px}) {
      position: sticky;
      top: 24px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }
  }
}
</style>
