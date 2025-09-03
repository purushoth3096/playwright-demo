const { test, expect } = require('@playwright/test');

test('Login flow test', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'demoUser');
  await page.fill('#password', 'demoPass');
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toContainText('Dashboard');
});
