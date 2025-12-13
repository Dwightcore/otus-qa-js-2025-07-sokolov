import { Locator, Page } from '@playwright/test';

export default class Header {
  private page: Page;
  private root: Locator;
  private loginLink: Locator;
  private logoutLink: Locator;
  private registerLink: Locator;
  private wishlistLink: Locator;
  private cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('.header');
    this.loginLink = this.root.getByRole('link', { name: 'Log in' });
    this.logoutLink = this.root.getByRole('link', { name: 'Log out' });
    this.registerLink = this.root.getByRole('link', { name: 'Register' });
    this.wishlistLink = this.root.getByRole('link', { name: /Wishlist/ });
    this.cartLink = this.root.getByRole('link', { name: /Shopping cart/ });
  }

  async openLogin(): Promise<void> { await this.loginLink.click(); }
  async openRegister(): Promise<void> { await this.registerLink.click(); }
  async openWishlist(): Promise<void> { await this.wishlistLink.click(); }
  async openCart(): Promise<void> { await this.cartLink.click(); }
  async logoutIfVisible(): Promise<void> {
    if (await this.logoutLink.isVisible()) await this.logoutLink.click();
  }
}

