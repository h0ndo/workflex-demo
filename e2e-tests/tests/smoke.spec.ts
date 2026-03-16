import { expect, test } from '@playwright/test';

test.describe('Workflex smoke', () => {
  test('frontend root is reachable', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Congratulations! Your app is running. 🎉')).toBeVisible();
  });
});
