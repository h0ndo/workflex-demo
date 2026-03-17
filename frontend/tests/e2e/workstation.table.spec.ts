import { expect, test } from '@playwright/test';

test('requests sorted data for every sortable column', async ({ page }) => {
  await page.goto('/');

  const assertions: Array<{ header: string; field: string }> = [
    { header: 'Employee', field: 'employee' },
    { header: 'Origin', field: 'originCountry' },
    { header: 'Destination', field: 'destinationCountry' },
    { header: 'Start', field: 'startDate' },
    { header: 'End', field: 'endDate' },
    { header: 'Working days', field: 'officeDays' },
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

test('toggles sort direction for Working days', async ({ page }) => {
  await page.goto('/');

  const firstRequestPromise = page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
  await page.getByRole('button', { name: 'Working days' }).click();
  const firstRequest = await firstRequestPromise;
  expect(new URL(firstRequest.url()).searchParams.get('sort')).toBe('officeDays,asc');

  const secondRequestPromise = page.waitForRequest((request) => request.url().includes('/workflex/workstation'));
  await page.getByRole('button', { name: 'Working days' }).click();
  const secondRequest = await secondRequestPromise;
  expect(new URL(secondRequest.url()).searchParams.get('sort')).toBe('officeDays,desc');
});
