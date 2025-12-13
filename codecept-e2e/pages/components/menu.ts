const { I } = inject();

export = {
  locators: {
    burgerBtn: "#react-burger-menu-btn",
    logout: "#logout_sidebar_link",
  },

  logout() {
    I.click(this.locators.burgerBtn);
    I.click(this.locators.logout);
  },
};
