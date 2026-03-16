import { setWorldConstructor, World, IWorldOptions, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  baseUrl: string;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl = process.env.E2E_BASE_URL ?? 'http://localhost:4200';
  }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED') {
    const dir = path.join(process.cwd(), 'test-results');
    fs.mkdirSync(dir, { recursive: true });
    const safeName = scenario.pickle.name.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
    await this.page.screenshot({ path: path.join(dir, `${safeName}.png`), fullPage: true });
  }

  await this.browser?.close();
});
