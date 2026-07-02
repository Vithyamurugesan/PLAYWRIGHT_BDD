// import { Given, When, Then } from "@cucumber/cucumber";
// import { chromium, Browser, Page, expect } from "@playwright/test";

// let browser: Browser;
// let page: Page;

// Given("User navigates to the application", async function () {
//     browser = await chromium.launch({ headless: false });
//     page = await browser.newPage();
//     await page.goto("https://bookcart.azurewebsites.net/");
//     await page.setViewportSize({ width: 1536, height: 864 });
// });

// Given("User click on the login link", async function () {

//     await page.getByRole("button", { name: "Login" }).click();
//     await expect(page.locator("mat-dialog-container")).toBeVisible();

// });

// Given("User enter the username as {string}", async function (username: string) {

//     await page.getByPlaceholder("Username").fill(username);

// });

// Given("User enter the password as {string}", async function (password: string) {

//     await page.getByPlaceholder("Password").fill(password);

// });

// When("User click on the login button", async function () {

//     await page.locator("mat-dialog-container").getByRole("button", { name: "Login" }).click();

// });

// Then("Login should be success", async function () {

//     const expectedUserName = "jennyk";

//     const userNameLocator = page.locator(
//         `//span[normalize-space(text())='${expectedUserName}']`
//     );

//     await expect(userNameLocator).toBeVisible();

//     await expect(userNameLocator).toHaveText(expectedUserName);

//     console.log("Login Successful");

//     await browser.close();
// });

// Then("Login should fail", async function () {

//     const expectedError = "Invalid username or password";

//     const errorMessage = page.locator("mat-error");

//     await expect(errorMessage).toBeVisible();

//     await expect(errorMessage).toHaveText(expectedError);

//     console.log("Login Failed");

//     await browser.close();
// });