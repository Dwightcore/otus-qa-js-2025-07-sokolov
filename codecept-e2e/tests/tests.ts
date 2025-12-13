// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../steps.d.ts" />

Feature("www.saucedemo.com");

const USER = "standard_user";
const LOCKED = "locked_out_user";
const PASS = "secret_sauce";

Scenario("Успешный логин редиректит", ({ loginPage, inventoryPage }) => {
  loginPage.open();

  loginPage.login(USER, PASS);

  inventoryPage.seeOpened();
});

Scenario("Заблокированный пользователь видит ошибку", ({ loginPage }) => {
  loginPage.open();

  loginPage.login(LOCKED, PASS);

  loginPage.seeError("Sorry, this user has been locked out.");
});

Scenario("Пользователь добавляет товар в корзину и проверяет его наличие", ({ loginPage, inventoryPage, cartPage }) => {
  const item = "Sauce Labs Backpack";

  loginPage.open();
  loginPage.login(USER, PASS);
  inventoryPage.seeOpened();

  inventoryPage.addItem(item);

  inventoryPage.seeCartCount(1);
  inventoryPage.openCart();
  cartPage.seeOpened();
  cartPage.seeItem(item);
});

Scenario("Завершение оформления заказа (позитивный путь)", ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
  const item = "Sauce Labs Backpack";

  loginPage.open();
  loginPage.login(USER, PASS);
  inventoryPage.addItem(item);
  inventoryPage.openCart();
  cartPage.seeItem(item);

  cartPage.checkout();
  checkoutPage.fillUserInfo({ firstName: "Test", lastName: "User", postalCode: "12345" });
  checkoutPage.finish();

  checkoutPage.seeComplete();
});

Scenario("Разлогин возвращает на страницу логина", ({ loginPage, inventoryPage, menu }) => {

  loginPage.open();
  loginPage.login(USER, PASS);
  inventoryPage.seeOpened();

  menu.logout();
});
