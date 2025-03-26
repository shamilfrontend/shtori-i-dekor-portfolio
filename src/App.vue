<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <img src="./assets/images/logo.png" alt="Logo" class="logo" />

      <nav class="sidebar__nav">
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Home</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">About Us</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Services</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Prices</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Shop</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Blog</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Contact</a>
          </li>
          <li class="sidebar__item">
            <a href="" class="sidebar__link">Cost Calculator</a>
          </li>
        </ul>
      </nav>

      <ul class="sidebar__social">
        <li class="social__item">
          <a href="" class="social__link">
            <img src="" alt="facebook" class="social__icon" />
          </a>
        </li>
        <li class="social__item">
          <a href="" class="social__link">
            <img src="" alt="twitter" class="social__icon" />
          </a>
        </li>
        <li class="social__item">
          <a href="" class="social__link">
            <img src="" alt="instagram" class="social__icon" />
          </a>
        </li>
      </ul>
    </div>

    <div class="main">
      <header class="header">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a href="" class="header__link">All</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Bridal Portraits</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Ceremony Coverage</a>
            </li>
            <li class="header__item">
              <a href="" class="header__link">Photo Booth</a>
            </li>
          </ul>
        </nav>
      </header>

      <div class="container">
        <div class="box">
          <img src="./assets/images/post-01.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-07.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-02.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-11.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-08.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-03.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-06.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-09.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-04.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-12.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-10.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/post-05.jpg" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-03.png" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-05.png" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-02.png" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-01.png" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-04.png" alt="" class="box__img" />
        </div>
        <div class="box">
          <img src="./assets/images/gallery-06.png" alt="" class="box__img" />
        </div>
      </div>

      <footer class="footer">
        <ul class="footer__list">
          <li class="footer__item">
            <img src="" alt="" class="footer__icon" />
            <a href="" class="footer__link">info@photography.com</a>
          </li>
          <li class="footer__item">
            <img src="" alt="" class="footer__icon" />
            <a href="" class="footer__link">Michelle +1 593 354 493</a>
          </li>
          <li class="footer__item">
            <img src="" alt="" class="footer__icon" />
            <a href="" class="footer__link">Lucas: +1 493 346 982</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

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

  .sidebar {
    text-align: center;
    padding-top: 50px;

    .logo {
      width: 130px;
      height: 109px;
    }

    &__list {
      text-align: center;
      list-style: none;
      padding: 0;
      margin: 0;

      @media (max-width: 1200px) {
        text-align: left;
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

      @media (max-width: 1200px) {
        display: block;
        padding: 10px 20px;
        font-size: 16px;
        text-transform: capitalize;
        transition: none;
      }

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
        &:active {
          color: #fff;
          background-color: #000;
        }
      }
    }

    &__social {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 0;

      .social__item:not(:last-child) {
        margin-right: 10px;
      }

      @media (max-width: 1200px) {
        display: none;
      }
    }
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
  }

  .footer {
    &__list {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
    }

    &__item:not(:last-child) {
      margin-right: 50px;

      @media (max-width: 1200px) {
        margin-right: 0;
        margin-bottom: 15px;

        @media (max-width: 800px) {
          margin-bottom: 30px;
        }
      }
    }

    &__link {
      color: #000;
      font-size: 16px;
      font-weight: 300;
      text-decoration: none;
    }
  }
}
</style>
