import { Locator, Page, expect } from '@playwright/test';
import BasePage from './base-page.js';

export default class CartPage extends BasePage {
  private title: Locator;
  private sku: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Shopping cart' });
    this.sku = page.locator('td.sku .sku-number');
  }

  async open(): Promise<void> { await super.open('/cart'); }

  async expectNotEmpty(): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.sku).toBeVisible();
  }
}
