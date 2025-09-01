import { Page } from '@playwright/test';

export class SalesforceAccountPage {
  private page: Page;
  private linksSelector = 'a';
  private buttonsSelector = 'button';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://your-salesforce-url.com/account-page');
  }

  async verifyLinksVisible(): Promise<boolean> {
    const links = await this.page.$$(this.linksSelector);
    for (const link of links) {
      if (!(await link.isVisible())) {
        return false;
      }
    }
    return true;
  }

  async verifyElementsEnabled(): Promise<boolean> {
    const elements = await this.page.$$(this.linksSelector + ', ' + this.buttonsSelector);
    for (const element of elements) {
      if (!(await element.isEnabled())) {
        return false;
      }
    }
    return true;
  }
}
