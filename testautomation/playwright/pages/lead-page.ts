import { Page } from '@playwright/test';

export class LeadPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLeadDetails() {
    await this.page.goto('https://yourcrm.com/lead-details');
  }

  async viewLeadInformation() {
    // Implementation for viewing lead information
  }

  async getLeadName() {
    return await this.page.textContent('.lead-name');
  }

  async getCompanyName() {
    return await this.page.textContent('.company-name');
  }

  async getJobTitle() {
    return await this.page.textContent('.job-title');
  }

  async getEmail() {
    return await this.page.textContent('.lead-email');
  }

  async getPhoneNumber() {
    return await this.page.textContent('.phone-number');
  }

  async updateLeadStatus(status: string) {
    await this.page.selectOption('.lead-status-dropdown', { label: status });
  }

  async getLeadStatus() {
    return await this.page.textContent('.lead-status');
  }

  async clickWebsiteLink() {
    await this.page.click('.website-link');
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async getEngagementHistory() {
    return await this.page.textContent('.engagement-history');
  }
}
