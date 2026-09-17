<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useMetrika } from "../../composables/useMetrika";

defineOptions({ name: "CookieConsent" });

const { t } = useI18n();
const { accept, decline, getStoredConsent, initFromStoredConsent } =
  useMetrika();

const visible = ref(false);

onMounted(() => {
  initFromStoredConsent();
  visible.value = getStoredConsent() === null;
});

function onAccept() {
  accept();
  visible.value = false;
}

function onDecline() {
  decline();
  visible.value = false;
}
</script>

<template>
  <aside v-if="visible" class="cookie-consent" role="dialog" aria-live="polite">
    <p class="cookie-consent__text">
      {{ t("consent.text") }}
      <router-link class="cookie-consent__link" to="/privacy">
        {{ t("consent.policyLink") }}
      </router-link>
    </p>
    <div class="cookie-consent__actions">
      <button
        type="button"
        class="cookie-consent__btn cookie-consent__btn--primary"
        @click="onAccept"
      >
        {{ t("consent.accept") }}
      </button>
      <button
        type="button"
        class="cookie-consent__btn cookie-consent__btn--ghost"
        @click="onDecline"
      >
        {{ t("consent.decline") }}
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use "../../styles/breakpoints" as *;

.cookie-consent {
  position: fixed;
  z-index: 210;
  right: calc(var(--rightbar-width) + 16px);
  bottom: 20px;
  width: min(300px, calc(100vw - 32px));
  padding: 16px 18px;
  background: var(--color-bg);
  border: 1px solid color-mix(in srgb, var(--color-navy) 12%, transparent);
  color: var(--color-navy);
  font-family: var(--font-main);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-navy) 8%, transparent);

  @media (max-width: $bp-desktop) {
    right: 16px;
    bottom: 16px;
  }

  &__text {
    margin: 0 0 14px;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.55;
    color: var(--color-navy);
  }

  &__link {
    color: var(--color-navy);
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: var(--color-muted);
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__btn {
    appearance: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1;
    padding: 10px 14px;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &--primary {
      background: var(--color-navy);
      color: #fff;

      &:hover {
        background: color-mix(in srgb, var(--color-navy) 88%, #000);
      }
    }

    &--ghost {
      background: transparent;
      color: var(--color-muted);
      border: 1px solid color-mix(in srgb, var(--color-muted) 40%, transparent);

      &:hover {
        color: var(--color-navy);
        border-color: var(--color-navy);
      }
    }
  }
}
</style>
