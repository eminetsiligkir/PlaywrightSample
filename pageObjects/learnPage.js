const { test, expect } = require('@playwright/test');
class LearnPage {

    constructor(page){
        this.page = page;
        this.learnMenuBtn = page.locator("//button[@aria-label='Learn']");
        this.brewGuideBtn = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Brew Guides'])[1]");
        this.chemexBtn = page.locator("(//button[@id='start-guide'])[1]");
        this.frenchPressBtn = page.locator("(//button[@id='start-guide'])[2]");
        this.esspressoBtn = page.locator("(//button[@id='start-guide'])[3]");
        this.siphonBtn = page.locator("(//button[@id='start-guide'])[4]");
        this.aeropresBtn = page.locator("(//button[@id='start-guide'])[5]");
        this.v60Btn = page.locator("(//button[@id='start-guide'])[6]");

        this.blogBtn = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Blog'])[1]");
    }

    async LearnCoffePage(){
        const brewGuidePage = "https://dev.traumkaffee.com/brew-guides";
        await this.learnMenuBtn.hover();
        await this.brewGuideBtn.click();
        await this.chemexBtn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/chemex");
        await this.page.waitForTimeout(2000);
        await this.page.goto(brewGuidePage);
        await this.frenchPressBtn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/french-press");
        await this.page.waitForTimeout(2000);
        await this.page.goto(brewGuidePage);
        await this.esspressoBtn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/espresso");
        await this.page.waitForTimeout(2000);
        await this.page.goto(brewGuidePage);
        await this.siphonBtn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/siphon");
        await this.page.waitForTimeout(2000);
        await this.page.goto(brewGuidePage);
        await this.aeropresBtn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/aeropress");
        await this.page.waitForTimeout(2000);
        await this.page.goto(brewGuidePage);
        await this.v60Btn.click();
        await expect(this.page).toHaveURL("https://dev.traumkaffee.com/brew-guides/hario");
    
    }

    async BlogPage(){
        await this.learnMenuBtn.hover();
        await this.blogBtn.click();
        const freshlyBrewedLocator = this.page.locator('text=Discover the latest trends in the coffee industry, from innovative brewing methods to sustainable practices that shape the future of coffee production.');
    }

}
module.exports = {LearnPage};