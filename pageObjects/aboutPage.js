const { test, expect } = require('@playwright/test');


class AboutPage {

  constructor(page)
{
    this.page = page;
    //about sayfası pathleri
    this.about = page.locator("button[aria-label='About']");
    this.about02 = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='About'])[1]");
    this.aboutCheck = page.locator("(//h4[contains(@class,'capitalize text-white font-butler font-light tracking-wider lg:text-4xl md:text-2xl text-center text-lg z-10 lg:mb-4')])[1]");
    //contact sayfası pathleri
    this.contactPageBtn = page.locator("(//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Contact'])[1]");
    this.nameContact = page.locator("#fullName");
    this.emailContact = page.locator("(//input[@id='email'])[1]");
    this.subjectContact = page.locator("//select[@id='subject']");
    this.orderNumContact = page.locator("#orderNumber");
    this.messageContact = page.locator("#message");
    this.sendContact = page.locator("#contact-btn");
    //sosyal medya
    this.facebookTraum = page.locator("(//img[@alt='social'])[1]");
    this.instagramTraum = page.locator("(//img[@alt='social'])[2]");
    this.xTraum = page.locator("(//img[@alt='social'])[3]");
    this.tiktokTraum = page.locator("(//img[@alt='social'])[4]");
    //sustainability sayfası
    this.sustainabilityPage = page.locator("//a[contains(@class,'hover:text-[#CF6300]')][normalize-space()='Sustainability']");
    this.checkSustainabilityPage = page.locator("//span[normalize-space()='can transform the world.']");

}


async AboutPage()
{
    await this.about.hover();
    await this.about02.click();
    const aboutCheck = this.page.locator('text=We are a coffee roastery where everyone can meet and build meaningful relationships around the aroma of freshly roasted coffee.');
    await aboutCheck.waitFor({ timeout: 5000 });
}
async ContactPage()
{
    await this.about.hover();
    await this.contactPageBtn.click();
    await this.nameContact.click();
    await this.nameContact.type("Cem Talasgir");
    await this.emailContact.click();
    await this.emailContact.type("cemtalasgir@gmail.com");
    await this.orderNumContact.click();
    await this.orderNumContact.type("123456789");
    await this.messageContact.click();
    await this.messageContact.type("Bu bir deneme mesajidir. Deneme 01 Deneme 02 Deneme 03");
    await this.subjectContact.selectOption({ value: "Where is my cargo" });
    await this.sendContact.click();
}
async ContactPageSocial()
{
    await this.about.hover();
    await this.contactPageBtn.click();
    await this.facebookTraum.click();
    await this.page.waitForTimeout(10000);
    await this.page.goto("https://dev.traumkaffee.com/contact");
    await this.instagramTraum.click();
    await this.page.waitForTimeout(10000);
    await this.page.goto("https://dev.traumkaffee.com/contact");
    await this.xTraum.click();
    //await this.page.waitForTimeout(10000);
    await this.page.goto("https://dev.traumkaffee.com/contact");
    await this.tiktokTraum.click();
    await this.page.waitForTimeout(10000);
    await this.page.goto("https://dev.traumkaffee.com/contact");
}
async SustainabilityPage()
{
    await this.about.hover();
    await this.sustainabilityPage.click();
    const checkSustainabilityPage = this.page.locator('text=Can Transform The World.');
    await checkSustainabilityPage.waitFor({ timeout: 10000 });
}
}
module.exports = {AboutPage};