/// <reference types="codeceptjs" />

export const config: CodeceptJS.MainConfig = {
  tests: "./tests/**/*.ts",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.saucedemo.com",
      browser: "chromium",
      show: false,
      waitForTimeout: 5000,
    },
  },
  include: {
    loginPage: "./pages/login",
    inventoryPage: "./pages/inventory",
    cartPage: "./pages/cart",
    checkoutPage: "./pages/checkout",
    menu: "./pages/components/menu",
  },
  mocha: {},
  name: "codecept-e2e",
};
