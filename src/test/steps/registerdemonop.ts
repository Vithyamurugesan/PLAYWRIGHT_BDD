// import { Given, When, Then} from "@cucumber/cucumber";
// import { chromium, Browser, Page, expect } from "@playwright/test";

// let browser: Browser;
// let page: Page;

// Given("the user in on the website", async function () {
//     browser = await chromium.launch({ headless: false });
//     page = await browser.newPage();
//     await page.goto("https://demo.nopcommerce.com/");
//     await page.locator(".Ymun7").click();
//     await page.setViewportSize({ width: 1536, height: 864 });
  
// });

// When("the user click the register link", async function () {
//     await page.locator(".ico-register").click();
  
// });

// When("user click gender", async function () {
//     await page.locator("#gender-female").check();
 
// });

// When("user enter first name {string}", async function (fname:string)  {
//     await page.locator("#FirstName").fill(fname);
  
// });

// When("user enter last name {string}", async function (lname:string) {
//     await page.locator("#LastName").fill(lname);
  
// });

// When("user enter email {string}", async function (email:string) {
//     await page.locator("#Email").fill(email);
// });

// When("user enter company name {string}", async function (comp:string) {
//     await page.locator("#Company").fill(comp);
  
// });

// When("user enter the password {string}", async function (pass:string) {
//   await page.locator("#Password").fill(pass);
// });

// When("user enter the confirmpassword {string}", async function (cpass:string) {
//     await page.locator("#ConfirmPassword").fill(cpass);
// });

// When("click the register", async function () {
//     await page.locator('#register-button').click();
 
// });

// Then("user should see Your registration completed", async function () {
//     await expect(page.locator(".result")).toBeVisible();
 
// });

// When("click continue button", async function () {
//     await page.getByRole('link', { name: 'Continue' }).click();
    
  
// });

// Then("user user should see logout", async function () {
//     await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();

   
// });
