import { test, expect } from '@playwright/test';

test('Главная страница загружается и видна галерея', async ({ page }) => {
  await page.goto('https://f2p-store-demo.xsolla.site');
  await expect(page.getByTestId('gallery-v2-slides')).toBeVisible();
});

test('Блоки отображаются на странице', async ({ page }) => {
  await page.goto('https://f2p-store-demo.xsolla.site');
  await expect(page.getByTestId('block-renderer').first()).toBeVisible();
});

test('Клик по покупке открывает окно логина', async ({ page }) => {
  await page.goto('https://f2p-store-demo.xsolla.site/store-page');

  await page.locator('[data-testid="buy-button"][data-sku="30_coins"]').click();

  const loginFrame = page.frameLocator('iframe[src*="login"]'); 

  await expect(loginFrame.getByTestId('login-form')).toBeVisible();
});

test('В окне логина есть вкладки Log in и Sign up', async ({ page }) => {
  await page.goto('https://f2p-store-demo.xsolla.site/store-page');

  await page.locator('[data-testid="buy-button"][data-sku="30_coins"]').click();

  const loginFrame = page.frameLocator('iframe[src*="login"]'); 
  await expect(loginFrame.getByTestId('login_tab-link')).toHaveText('Log in');
  await expect(loginFrame.getByTestId('signUp_tab-link')).toHaveText('Sign up');
});

test('Форма логина поля и кнопка входа', async ({ page }) => {
  await page.goto('https://f2p-store-demo.xsolla.site/store-page');

  await page.locator('[data-testid="buy-button"][data-sku="30_coins"]').click();

  const loginFrame = page.frameLocator('iframe[src*="login"]'); 

  await expect(loginFrame.getByTestId('log-in-form__fields-universal')).toBeVisible();
  await expect(loginFrame.getByTestId('log-in-form__fields-password')).toBeVisible();
  await expect(loginFrame.getByTestId('login-form__button-submit')).toBeVisible();
});