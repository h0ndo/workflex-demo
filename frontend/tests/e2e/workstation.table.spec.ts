import { expect, test } from '@playwright/test';

test('shows workstation table data', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Workstations' })).toBeVisible();
  await expect(page.locator('tbody tr')).toHaveCount(5);
  await expect(page.locator('tbody tr').first()).toContainText('Andre Fischer');
});

test('requests sorted data for every sortable column', async ({ page }) => {
  await page.goto('/');

  const assertions: Array<{ header: string; field: string }> = [
    { header: 'Employee', field: 'employee' },
    { header: 'Origin', field: 'originCountry' },
    { header: 'Destination', field: 'destinationCountry' },
    { header: 'Start Date', field: 'startDate' },
    { header: 'End Date', field: 'endDate' },
    { header: 'Office Days', field: 'officeDays' },
    { header: 'Risk', field: 'risk' },
  ];

  for (const item of assertions) {
    const requestPromise = page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
    await page.getByRole('button', { name: item.header }).click();
    const request = await requestPromise;

    const url = new URL(request.url());
    expect(url.searchParams.get('sort')).toBe(`${item.field},asc`);
  }
});

test('toggles sort direction for a column', async ({ page }) => {
  await page.goto('/');

  const firstRequestPromise = page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
  await page.getByRole('button', { name: 'Office Days' }).click();
  const firstRequest = await firstRequestPromise;
  expect(new URL(firstRequest.url()).searchParams.get('sort')).toBe('officeDays,asc');

  const secondRequestPromise = page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
  await page.getByRole('button', { name: 'Office Days' }).click();
  const secondRequest = await secondRequestPromise;
  expect(new URL(secondRequest.url()).searchParams.get('sort')).toBe('officeDays,desc');
});
