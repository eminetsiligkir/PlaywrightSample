const { test, expect } = require('@playwright/test');

class BecomeOurPartnerPage{
constructor(page){
    this.page = page;
    this.becomePartnerBtn = page.locator("button[aria-label='Become Our Partner']");
    this.fullnamePartner = page.locator("input[placeholder='Full Name']");
    this.emailPartner = page.locator("input[placeholder='Email']");
    this.contactNumPartner = page.locator("input[placeholder='Contact Number']");
    this.bussinesNamePartner = page.locator("input[placeholder='Business Name']");
    this.selectTypePartner = page.locator("select[name='typeOfBusiness']");
    this.cafeOptionPartner = page.locator("option[value='Cafe']");
    this.tellUsPartner = page.locator("textarea[placeholder='Tell us a bit about your business... the more info the better!']");
    this.sendBtn = page.locator("#submit");

}

async BecomeOurPartners(){
    const fullNamePartner = "Cem Talasgir";
    const emailNamePartner = "cemtalasgir@hotmail.com";
    const phonePartner = "+306986578452";

    await this.becomePartnerBtn.click();
    await this.fullnamePartner.click();
    await this.fullnamePartner.type(fullNamePartner);
    await this.emailPartner.click();
    await this.emailPartner.type(emailNamePartner);
    await this.contactNumPartner.click();
    await this.contactNumPartner.type(phonePartner);
    await this.bussinesNamePartner.click();
    await this.bussinesNamePartner.type("Tonwell Cigital");
    await this.selectTypePartner.selectOption({ value: "Cafe" });
    await this.tellUsPartner.click();
    await this.tellUsPartner.type("Traum is ready to work with you to fulfill your business’ coffee, training, equipment and service needs. ");
    await this.sendBtn.click();
}

}
module.exports = {BecomeOurPartnerPage};