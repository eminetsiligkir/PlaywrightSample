const { test, expect } = require('@playwright/test');
class WholeSalePage {
    constructor(page){
        this.page=page;
        this.wholesaleBtn = page.locator("(//button[@aria-label='Wholesale'])[1]");
        this.wholesalePageBtn = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Wholesale'])[1]")
        this.coffeForRestrPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Coffee For Restaurant'])[1]");
        this.coffeForHotelPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Coffee For Hotels'])[1]");
        this.cafeAndCoffeeShopPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Cafes and Coffee Shops'])[1]");
        this.coffeAtWorkPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Coffee At Work'])[1]");
        this.equipmentsPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Equipments'])[1]");
        this.trainingPage = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Training'])[1]");
 
    }

    async WholeSale()
{
    await this.wholesaleBtn.hover();
    await this.wholesalePageBtn.click();
    const checkWholesalePage = this.page.locator("text=When you partner with Traum Kaffee, you're not just getting a supplier-you're joining a community of coffee lovers who share your passion for excellence.");
    await checkWholesalePage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.coffeForRestrPage.click();
    const checkCoffeForRestPage = this.page.locator("text=If your business serves coffee, Traum Kaffee is your perfect partner. Whether you own a small venue or a restaurant chain, we provide the perfect coffee for you and your customers.");
    await checkCoffeForRestPage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.coffeForHotelPage.click();
    const checkcoffeForHotelPage = this.page.locator("text=Looking for the perfect coffee partner for your hotel? Look no further than Traum Kaffee!");
    await checkcoffeForHotelPage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.cafeAndCoffeeShopPage.click();
    const checkcafeAndCoffeeShopPage = this.page.locator("text=Traum is a great choice for cafes and coffee shops looking to impress their customers with high quality coffee, sustainably sourced and carefully roasted to perfection.");
    await checkcafeAndCoffeeShopPage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.coffeAtWorkPage.click();
    const checkcoffeAtWorkPage = this.page.locator("text=From early-morning meetings to late-night deadlines, Traum Kaffee is the reliable companion that fuels your workday.");
    await checkcoffeAtWorkPage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.equipmentsPage.click();
    const checkequipmentsPage = this.page.locator("text=At Traum Kaffee, we are dedicated to supplying the best equipment to make the best coffee.");
    await checkequipmentsPage.waitFor({ timeout: 5000 });
    await this.wholesaleBtn.hover();
    await this.trainingPage.click();
    const checktrainingPage = this.page.locator("text=At Traum, we believe that making the perfect cup of coffee is an art form that requires not only skill but also knowledge and passion.");
    await checktrainingPage.waitFor({ timeout: 5000 });
}
}
module.exports = {WholeSalePage};
