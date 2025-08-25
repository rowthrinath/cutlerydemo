import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LeadPage } from '../pages/lead-page';

const leadPage = new LeadPage();

Given('I am on the lead details page', async () => {
  await leadPage.navigateToLeadDetails();
});

When('I view the lead information', async () => {
  await leadPage.viewLeadInformation();
});

Then('I should see the lead name as {string}', async (name: string) => {
  const leadName = await leadPage.getLeadName();
  expect(leadName).toBe(name);
});

Then('I should see the company name as {string}', async (company: string) => {
  const companyName = await leadPage.getCompanyName();
  expect(companyName).toBe(company);
});

Then('I should see the job title as {string}', async (jobTitle: string) => {
  const title = await leadPage.getJobTitle();
  expect(title).toBe(jobTitle);
});

Then('I should see the email as {string}', async (email: string) => {
  const leadEmail = await leadPage.getEmail();
  expect(leadEmail).toBe(email);
});

Then('I should see the phone number as {string}', async (phone: string) => {
  const phoneNumber = await leadPage.getPhoneNumber();
  expect(phoneNumber).toBe(phone);
});

When('I update the lead status to {string}', async (status: string) => {
  await leadPage.updateLeadStatus(status);
});

Then('the lead status should be updated to {string}', async (status: string) => {
  const leadStatus = await leadPage.getLeadStatus();
  expect(leadStatus).toBe(status);
});

When('I click on the website link', async () => {
  await leadPage.clickWebsiteLink();
});

Then('I should be navigated to {string}', async (url: string) => {
  const currentUrl = await leadPage.getCurrentUrl();
  expect(currentUrl).toBe(url);
});

Then('the engagement history should display {string}', async (message: string) => {
  const engagementHistory = await leadPage.getEngagementHistory();
  expect(engagementHistory).toBe(message);
});
