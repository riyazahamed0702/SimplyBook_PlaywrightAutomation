import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://simplybook.me/en/');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('textbox', { name: 'Company login' }).click();
  await page.getByRole('textbox', { name: 'Company login' }).click();
  await page.getByRole('textbox', { name: 'Company login' }).fill('nandhinibooks');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'User login' }).click();
  await page.getByRole('textbox', { name: 'User login' }).click();
  await page.getByRole('textbox', { name: 'User login' }).fill('nandhudarlz.nandhudarlz@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Nandhu@3108');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://nandhinibooks.secure.simplybook.me/?back_url=/v2/');
  await page.getByRole('textbox', { name: 'User login' }).click();
  await page.getByRole('textbox', { name: 'User login' }).fill('nandhudarlz.nandhudarlz@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Nandhu@3108');
  await page.getByRole('button', { name: 'Log in' }).click();
});