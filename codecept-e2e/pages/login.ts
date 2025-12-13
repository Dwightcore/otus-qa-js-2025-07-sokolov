const { I } = inject();

export = {
  locators: {
    username: "#user-name",
    password: "#password",
    loginBtn: "#login-button",
    error: '[data-test="error"]',
  },

  open() {
    I.amOnPage("/");
  },

  login(username: string, password: string) {
    I.fillField(this.locators.username, username);
    I.fillField(this.locators.password, password);
    I.click(this.locators.loginBtn);
  },

  seeError(text: string) {
    I.see(text, this.locators.error);
  },
};
