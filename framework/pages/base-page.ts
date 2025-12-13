import { Page } from '@playwright/test';

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(path: string): Promise<void> {
    await this.page.goto(`https://demo.nopcommerce.com${path}`);
  }
}

