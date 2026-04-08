import { defineConfig, devices } from '@playwright/test';
<<<<<<< HEAD
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [
    [
      'playwright-xray',
      {
        jira: {
          url: 'https://servicetitan.atlassian.net',
          type: 'cloud',
        },
        cloud: {
          client_id: 'YOUR_XRAY_CLIENT_ID',
          client_secret: 'YOUR_XRAY_CLIENT_SECRET',
        },
        projectKey: 'SS',
        testPlan: 'SS-57',           // your master test plan
        uploadScreenShot: true,
        uploadTrace: false,
        jiraXrayStatusMapping: {
          passed: 'PASS',
          failed: 'FAIL',
          skipped: 'SKIPPED',
          timedOut: 'FAIL',
          interrupted: 'ABORTED',
        },
      },
    ],
    ['html'],   // keep your HTML report too
  ],
};
=======
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
<<<<<<< HEAD
   /* Run tests in files in parallel */
   fullyParallel: false,
   /* Fail the build on CI if you accidentally left test.only in the source code. */
   forbidOnly: !!process.env.CI,
   /* Retry on CI only */
   retries: process.env.CI ? 2 : 0,
   /* Opt out of parallel tests on CI. */
   workers: process.env.CI ? 4 : undefined,
   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   reporter: 'html',
   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
   timeout: 240000, // Increase test timeout to 4 minutes
   expect: {
     timeout: 100000, // Increase expect timeout to 10 seconds
   },
   use: {
     /* Cap every individual action (click, fill, etc.) at 10 s so that
        .catch(() => {}) calls never silently burn the full default 30 s. */
     actionTimeout: 240000,
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL || 'https://sprolive.theservicepro.net/login.aspx',

    /* Permissions - grant geolocation access */
    permissions: ['geolocation'],

    /* Geolocation settings */
    geolocation: { latitude: 37.7749, longitude: -122.4194 }, // San Francisco coordinates

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
=======
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799
  },

  /* Configure projects for major browsers */
  projects: [
<<<<<<< HEAD
   /*
    {
  name: 'debug-chrome',
  use: {
    headless: false,
    slowMo: 500,            // 500ms between each action
    channel: 'chrome',      // use your installed Chrome, not bundled Chromium
    viewport: { width: 1920, height: 1080 },
  },
   },
  */
   {
     
  name: 'chromium',
  use: {
    headless: true,
    channel: 'chrome',      // use your installed Chrome, not bundled Chromium
    ...devices['Desktop Chrome'],
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      slowMo: 500,            // 500ms between each action
      args: ['--disable-cache', '--disk-cache-size=0']
    }
       }
    },

    
=======
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
<<<<<<< HEAD
    
=======

>>>>>>> 4279bb2479469d18a2530214d3a6d7f5edb9f799
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
