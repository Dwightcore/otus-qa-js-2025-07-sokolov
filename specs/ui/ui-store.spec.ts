import { test, expect } from '@playwright/test';
import MainPage from '../../framework/pages/main-page.js';
import LoginPage from '../../framework/pages/login-page.js';
import ProductPage from '../../framework/pages/product-page.js';
import CartPage from '../../framework/pages/cart-page.js';
import CategoryPage from '../../framework/pages/category-page.js';
import WishlistPage from '../../framework/pages/wishlist-page.js';
import RegisterPage from '../../framework/pages/register-page.js';

test('Регистрация нового пользователя', async ({ page }) => {
  const main = new MainPage(page);
  const register = new RegisterPage(page);

  await main.open();
  await main.header.openRegister();

  await register.register({
    gender: 'male',
    firstName: 'QA',
    lastName: 'Engineer',
    email: `qa.${Date.now()}@example.com`,
    password: 'Qwerty123!'
  });

  await register.expectSuccessfulRegistration();
});

test('Регистрация с подпиской на newsletter', async ({ page }) => {
  const main = new MainPage(page);
  const register = new RegisterPage(page);

  await main.open();
  await main.header.openRegister();

  await register.register({
    gender: 'female',
    firstName: 'Jane',
    lastName: 'Doe',
    email: `jane.${Date.now()}@example.com`,
    company: 'QA Corp',
    newsletter: true,
    password: 'SecurePass123!'
  });

  await register.expectSuccessfulRegistration();
});

test('Регистрация с невалидным email', async ({ page }) => {
  const main = new MainPage(page);
  const register = new RegisterPage(page);

  await main.open();
  await main.header.openRegister();

  await register.register({
    gender: 'female',
    firstName: 'Test',
    lastName: 'User',
    email: 'invalid-email@example',
    password: 'Test123!'
  });

  await register.expectValidationError('Wrong email');
});

test('Логин и выход', async ({ page }) => {
  const main = new MainPage(page);
  await main.open();
  await main.header.openLogin();

  const login = new LoginPage(page);
  const email = process.env.NOP_EMAIL ?? 'qa.auto@example.com';
  const pass = process.env.NOP_PASS ?? 'Qwerty123!';

  await login.login(email, pass);
  await login.expectLoggedIn();

  await main.header.logoutIfVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});

test('Добавление товара в корзину', async ({ page }) => {
  const product = new ProductPage(page);

  await product.openBySlug('digital-storm-vanquish-custom-performance-pc');
  await product.addToCartItem();
});

test('Сортировка в Cell phones', async ({ page }) => {
  const main = new MainPage(page);
  const cat = new CategoryPage(page);

  await main.open();
  await main.openSubCategory('Electronics', 'Cell phones');

  await cat.sortByLowToHigh();
  await cat.expectSortedByPrice(); 
});

test('Wishlist в Cart', async ({ page }) => {
  const main = new MainPage(page);
  const wish = new WishlistPage(page);
  const cart = new CartPage(page);

  await main.open();
  await main.addFirstCardToWishlist();
  await main.header.openWishlist();

  await wish.expectNotEmpty();
  await wish.moveFirstToCart();

  await main.header.openCart();
  await cart.expectNotEmpty();
});
