import { expect, test } from '@playwright/test';

test('shows workstation table data', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Workstations' })).toBeVisible();
  await expect(page.locator('tbody tr')).toHaveCount(5);
  await expect(page.locator('tbody tr').first()).toContainText('Andre Fischer');
});

test('sorts by office days', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Office days' }).click();

  const firstRow = page.locator('tbody tr').first();
  await expect(firstRow).toContainText('1');
});
