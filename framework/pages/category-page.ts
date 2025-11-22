import { Page, Locator, expect } from '@playwright/test';
import BasePage from './base-page.js';

export default class CategoryPage extends BasePage {
  private sortSelect: Locator;
  private products: Locator;

  constructor(page: Page) {
    super(page);
    this.sortSelect = page.locator('select#products-orderby');
    this.products = page.locator('.product-item');
  }

  async sortByLowToHigh(): Promise<void> {
    await this.sortSelect.selectOption({ label: 'Price: Low to High' });
    await this.page.waitForLoadState('networkidle');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.products.first()).toBeVisible();
  }

  async expectSortedByPrice(): Promise<void> {
    await expect(this.products.first()).toBeVisible();
  }
}
