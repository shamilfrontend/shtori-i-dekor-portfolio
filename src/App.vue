<template>
  <div class="wrapper">
    <the-sidebar />

    <div class="main">
      <header class="header">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a href="" class="header__link">Все</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Меню 1</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Меню 2</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Меню 3</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Меню 4</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Меню 5</a>
            </li>
          </ul>
        </nav>
      </header>

      <div class="container">
        <div class="box">
          <img src="./assets/images/gallery-01.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-02.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-03.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-04.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-05.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-06.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-07.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-08.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-09.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-10.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-11.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-12.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-13.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-14.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-15.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-16.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-17.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-18.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-19.jpg" alt="" class="box__img" />
        </div>
      </div>

      <the-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheSidebar from "./components/TheSidebar/index.vue";
import TheFooter from "./components/TheFooter/index.vue";

defineOptions({
  name: "App",

  components: {
    TheSidebar,
    TheFooter,
  },
});
</script>

<style lang="scss">
img {
  max-width: 100%;
  height: auto;
}

.wrapper {
  font-family: "Jost", sans-serif;
  display: grid;
  grid-template-columns: 350px 1fr;
  overflow: hidden;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  .main {
    padding-top: 50px;
    margin-right: 50px;
    padding-bottom: 50px;

    @media (max-width: 1200px) {
      margin-left: 50px;
      padding-bottom: 15px;
    }

    @media (max-width: 800px) {
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  
  .header {
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

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    columns: 3;
    column-gap: 50px;

    @media (max-width: 1200px) {
      columns: 2;
      column-gap: 30px;
    }

    @media (max-width: 700px) {
      columns: 1;
    }
  }
  .box {
    width: 100%;
    overflow: hidden;
    break-inside: avoid;
    padding-bottom: 50px;

    @media (max-width: 1200px) {
      padding-bottom: 30px;
    }
  }
}
</style>
