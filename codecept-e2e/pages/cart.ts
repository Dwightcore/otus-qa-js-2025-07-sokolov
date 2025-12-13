const { I } = inject();

export = {
  locators: {
    title: ".title",
    item: (name: string) => `.cart_item:has-text("${name}")`,
    checkoutBtn: "#checkout",
  },

  seeOpened() {
    I.see("Your Cart", this.locators.title);
  },

  seeItem(name: string) {
    I.seeElement(this.locators.item(name));
  },

  checkout() {
    I.click(this.locators.checkoutBtn);
  },
};
