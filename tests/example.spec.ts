import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  console.log(process.env);
  console.log(test.info());
  await page.goto('/gh-actions-workshop/');

  await expect(page).toHaveTitle(/GitHub Actions Workshop/);
});
