const { I } = inject();

export = {
  locators: {
    title: ".title",
    cartBadge: ".shopping_cart_badge",
    cartLink: ".shopping_cart_link",
    addBtn: (name: string) =>
      `.inventory_item:has-text("${name}") button.btn_inventory`,
  },

  seeOpened() {
    I.see("Products", this.locators.title);
  },

  addItem(name: string) {
    I.click(this.locators.addBtn(name));
  },

  seeCartCount(count: number) {
    I.see(String(count), this.locators.cartBadge);
  },

  openCart() {
    I.click(this.locators.cartLink);
  },
};
