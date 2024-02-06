import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2,
  workers: process.env.CI ? 4 : undefined,
  reporter: [["html", { open: "never", outputFolder: "tests/reports" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on",
    video: "on",
  },

  globalSetup: require.resolve("./tests/globalSetup"),

  projects: [
    {
      name: "iPhone 14",
      use: devices["iPhone 14"],
    },
    {
      name: "Pixel 7",
      use: devices["Pixel 7"],
    },
  ],
});
