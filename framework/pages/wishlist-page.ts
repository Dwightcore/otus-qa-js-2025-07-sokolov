import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base-page.js';

export default class WishlistPage extends BasePage {
  private title: Locator;
  private rows: Locator;
  private addToCart: Locator;
  private firstCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Wishlist' });
    this.rows = page.locator('.wishlist-content .cart-item-row');
    this.addToCart = page.getByRole('button', { name: 'Add to cart' });
    this.firstCheckbox = page.locator('input[name="addtocart"]').first();
  }

  async open(): Promise<void> { await super.open('/wishlist'); }

  async moveFirstToCart(): Promise<void> {
    await this.firstCheckbox.check();
    await this.addToCart.click();
  }

  async expectNotEmpty(): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.rows.first()).toBeVisible();
  }
}
