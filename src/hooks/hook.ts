import {Before,After} from "@cucumber/cucumber";
import { chromium,Browser,Page } from "@playwright/test";
//import {pageFixture} from "./pageFixture";
import { CustomWorld } from "./world";

let browser:Browser;
Before(async function(){
    this.browser=await chromium.launch({headless:false});
    this.context=await this.browser.newContext();
    this.page=await this.context.newPage();
    //pageFixture.page=page;
});
After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})