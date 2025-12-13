const { I } = inject();

export = {
  locators: {
    title: ".title",
    firstName: "#first-name",
    lastName: "#last-name",
    postalCode: "#postal-code",
    continueBtn: "#continue",
    finishBtn: "#finish",
    completeHeader: ".complete-header",
  },

  fillUserInfo({ firstName, lastName, postalCode }: { firstName: string; lastName: string; postalCode: string }) {
    I.fillField(this.locators.firstName, firstName);
    I.fillField(this.locators.lastName, lastName);
    I.fillField(this.locators.postalCode, postalCode);
    I.click(this.locators.continueBtn);
  },

  finish() {
    I.click(this.locators.finishBtn);
  },

  seeComplete() {
    I.see("Thank you for your order!", this.locators.completeHeader);
  },
};