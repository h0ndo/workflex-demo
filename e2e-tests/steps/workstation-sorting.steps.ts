import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('the workstation page is open', async function (this: CustomWorld) {
  await this.page.goto(`${this.baseUrl}/`, { waitUntil: 'domcontentloaded' });
});

When('I sort by {string}', async function (this: CustomWorld, header: string) {
  const requestPromise = this.page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
  await this.page.getByRole('button', { name: header }).click();
  this.lastWorkstationRequest = await requestPromise;
});

Then('the workstation request should contain sort {string}', function (this: CustomWorld, expectedSort: string) {
  expect(this.lastWorkstationRequest, 'Expected a workstation API request after sorting').toBeDefined();

  const url = new URL(this.lastWorkstationRequest!.url());
  expect(url.searchParams.get('sort')).toBe(expectedSort);
});
