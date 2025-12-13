import { Locator, Page } from '@playwright/test';
import BasePage from './base-page.js';

export default class ProductPage extends BasePage {
  private form: Locator;
  private addToCart: Locator;
  

  constructor(page: Page) {
    super(page);
    this.form = page.locator('#product-details-form');
    this.addToCart = page.locator('#add-to-cart-button-2');
  }

  async openBySlug(slug: string): Promise<void> {
    await super.open(`/${slug}`);
  }

  async addToCartItem(): Promise<void> {
    await this.addToCart.click();
  }
}

