/* eslint-disable @typescript-eslint/no-empty-object-type */
/// <reference types="codeceptjs" />

type LoginPage = typeof import("./pages/login");
type InventoryPage = typeof import("./pages/inventory");
type CartPage = typeof import("./pages/cart");
type CheckoutPage = typeof import("./pages/checkout");
type Menu = typeof import("./pages/components/menu");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;

    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    menu: Menu;
  }

  interface Methods extends Playwright {}
  interface I extends WithTranslation<Methods> {}
}
