import { Locator, expect } from "@playwright/test";

export async function assertVisible(locator: Locator, message: string): Promise<void> {
  await expect(locator.first(), message).toBeVisible();
}

export async function assertNotVisible(locator: Locator, message: string): Promise<void> {
  await expect(locator, message).toHaveCount(0);
}
