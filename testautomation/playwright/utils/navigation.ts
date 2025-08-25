import { Page } from '@playwright/test';

export async function navigateTo(page: Page, url: string) {
  await page.goto(url);
}
