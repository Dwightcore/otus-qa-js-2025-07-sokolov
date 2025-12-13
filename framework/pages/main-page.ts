import { Locator, Page } from '@playwright/test';
import BasePage from './base-page.js';
import Header from './fragments/header.js';

export default class MainPage extends BasePage {
  header: Header;
  private productGrid: Locator;
  private firstCard: Locator;
  private firstCardAddToWishlist: Locator;
  private firstCardAddToCart: Locator;
  private toast: Locator;
  private menu: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.productGrid = page.locator('.product-grid');
    this.firstCard = this.productGrid.locator('.product-item').first();
    this.firstCardAddToWishlist = this.firstCard.getByRole('button', { name: /Add to wishlist/i });
    this.firstCardAddToCart = this.firstCard.getByRole('button', { name: /Add to cart/i });
    this.toast = page.locator('#bar-notification');
    this.menu = page.locator('.header-menu');
  }

  async open(): Promise<void> { await super.open('/'); }

  async addFirstCardToWishlist(): Promise<void> {
    await this.firstCardAddToWishlist.click();
    await this.toast.getByText('has been added to your wishlist').waitFor();
  }

  async addFirstCardToCart(): Promise<void> {
    await this.firstCardAddToCart.click();
    await this.toast.getByText('has been added to your shopping cart').waitFor();
  }

  async openSubCategory(parent: string, child: string): Promise<void> {
    await this.page.getByRole('link', { name: parent, exact: false }).first().click();
    await this.page.getByRole('link', { name: child, exact: false }).first().click();
  }
}

