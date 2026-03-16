import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('the application is running', async function (this: CustomWorld) {
  await this.page.goto(this.baseUrl, { waitUntil: 'domcontentloaded' });
});

When('I open the root page', async function (this: CustomWorld) {
  await this.page.goto(`${this.baseUrl}/`, { waitUntil: 'domcontentloaded' });
});

Then('I should see the running app message', async function (this: CustomWorld) {
  await expect(this.page.getByText('Congratulations! Your app is running. 🎉')).toBeVisible();
});
