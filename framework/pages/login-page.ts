import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base-page.js';

export default class LoginPage extends BasePage {
  private email: Locator;
  private password: Locator;
  private loginBtn: Locator;
  private myAccount: Locator;

  constructor(page: Page) {
    super(page);
    this.email = page.getByLabel('Email:');
    this.password = page.getByLabel('Password:');
    this.loginBtn = page.getByRole('button', { name: 'Log in' });
    this.myAccount = page.getByRole('link', { name: 'My account' });
  }

  async open(): Promise<void> { await super.open('/login'); }

  async login(userEmail: string, pass: string): Promise<void> {
    await this.email.fill(userEmail);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async expectLoggedIn(): Promise<void> {
    await expect(this.myAccount).toBeVisible();
  }
}