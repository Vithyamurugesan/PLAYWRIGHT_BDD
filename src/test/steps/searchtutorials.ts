import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../../hooks/world";

Given("User is on the TutorialsNinja home page", async function (this: CustomWorld) {

    await this.page.goto("https://tutorialsninja.com/demo/");

});

When("User enters product name {string}", async function (this: CustomWorld, product: string) {

    await this.page.locator("input[name='search']").fill(product);

});

When("User clicks the search button", async function (this: CustomWorld) {

    await this.page.locator("button.btn.btn-default.btn-lg").click();

});

Then("User should see the searched product", async function (this: CustomWorld) {

    await expect(
        this.page.locator("//a[text()='MacBook']")
    ).toBeVisible();

});

Then("User should see no product message", async function (this: CustomWorld) {

    await expect(
        this.page.locator("text=There is no product that matches the search criteria.")
    ).toBeVisible();

});