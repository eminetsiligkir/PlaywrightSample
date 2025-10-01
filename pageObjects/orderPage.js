const { test, expect } = require('@playwright/test');

class OrderCoffeePage {

    constructor(page){
        this.page = page;
        this.shopNowBtn = page.locator("//button[normalize-space()='Shop Now']");
        this.orderNowBtn = page.locator("//button[normalize-space()='Order Now']");
        this.orderNowProductKioskBtn = page.locator("(//button[contains(@class,'lg:bottom-6 md:bottom-6 bottom-6 lg:right-8 right-4 lg:h-9 h-7 xl:text-base lg:text-base text-[10px]')][normalize-space()='Order Now'])[1]");
        this.orderNowProductDubaiBtn = page.locator("(//button[contains(@class,'lg:bottom-6 md:bottom-6 bottom-6 lg:right-8 right-4 lg:h-9 h-7 xl:text-base lg:text-base text-[10px]')][normalize-space()='Order Now'])[2]");
        this.hondorusCoffe = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[1]");
        this.traumBlendCoffee = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[2]");
        this.capsulesCofee = page.locator("//p[normalize-space()='Capsules Coffees']");
        this.dripCofees = page.locator("//p[normalize-space()='Drip Coffees']");
        this.wholeBeanCoffees = page.locator("//p[normalize-space()='Whole Bean Coffees']");
        this.chocoColombiaCap = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[3]");
        this.traumBlendCap = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[4]");
        this.elSalvadorDripCoffee = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[5]");
        this.burundiDripCoffee = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[6]");
        this.burundiSingleDrip = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[7]");
        this.elSalvadorSingleDrip = page.locator("(//img[contains(@class,'lg:hover:shadow-hover-shadow lg:hover:shadow-lg')])[8]");
        this.wholeBeanCoffeeType = page.locator("(//button[normalize-space()='Whole Bean'])[1]");
        this.groundCoffeeType = page.locator("(//div[@class=' css-aoxytf-singleValue'])[1]");
        this.weightCoffee1k = page.locator("(//button[normalize-space()='1kg'])[1]");
        this.weightCoffee250g = page.locator("(//button[normalize-space()='250gr'])[1]");
        this.removeCoffee = page.locator("(//*[name()='path'])[16]");
        this.addCoffee = page.locator("(//*[name()='svg'])[17]");
        this.deleteCoffee = page.locator("(//*[name()='svg'])[17]");
        this.addToBasket = page.locator("(//div[contains(@class,'text-[#FFFFFF] lg:text-[16px] text-[14px] flex justify-center font-sans font-black self-center uppercase')])[1]");
        this.successfullyAdded = page.locator("div[role='alert'] div:nth-child(1)");//Added to cart!
        this.changeMarket = page.locator("#change-address");
        this.cardUpdate = page.locator("//div[contains(text(),'Cart Updated')]");
        this.completeOrder = page.locator("(//div[contains(@class,'text-[#FFFFFF] xs:text-[16px] text-[10px] md:text-[14px] sm:text-[11px] lg:text-[16px] flex justify-center font-sans font-black self-center uppercase')])[1]");

        this.emailShipping = page.locator("#email");
        this.fullnameShipping = page.locator("#shippingName");
        this.adresslineShipping = page.locator("#shippingAddressLine1");
        this.adressline2Shipping = page.locator("#shippingAddressLine2");
        this.selectShippingArea = page.locator("#shippingAdministrativeArea");
        this.phoneNumberShipping = page.locator("#phoneNumber");
        this.purchaseBussines = page.locator("label[for='purchasingAsBusinessCheckbox'] span[class='Checkbox-Label Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500']");
        this.bussinesNameShipping = page.locator("#businessName");
        this.taxIDTypeShipping = page.locator("#taxIdType");
        this.taxNumShipping = page.locator("#taxId");
        this.cardNumShipping = page.locator("#cardNumber");
        this.cardExpShipping = page.locator("#cardExpiry");
        this.cardCVCShipping = page.locator("#cardCvc");
        this.securityPurchase = page.locator("#enableStripePass");
        this.billingInfoAsSame = page.locator("#cardUseShippingAsBilling");
        this.bilingNameShipping = page.locator("#billingName");
        this.bilingCountryShipping = page.locator("#billingCountry");
        this.bilingAdresShipping = page.locator("#billingAddressLine1");
        this.addManuallyShipping = page.locator("(//span[@class='Button-textCheckoutSecondary Text Text-color--gray400 Text-fontWeight--500 Text--truncate'])[1]");
        this.payShipping = page.locator(".SubmitButton-IconContainer");
        this.backBtn = page.locator("(//span[@class='Header-businessLink-label Text Text-color--gray800 Text-fontSize--14 Text-fontWeight--500'])[1]");
    //Your Order is Placed!
this.addtobasket02 = page.locator("(//div[contains(@class,'text-[#FFFFFF] lg:text-[16px] text-[14px] flex justify-center font-sans font-black self-center uppercase')])[1]");
}
async waitForElementWithText(text, timeout = 5000) {
    const elementWait = this.page.locator(`text=${text}`);
    //await elementWait.waitFor({ timeout });
  }

async OrderCoffee(){
    
    await this.shopNowBtn.click();
    await this.page.goto('https://dev.traumkaffee.com');
    await this.orderNowBtn.click();
    await this.orderNowProductKioskBtn.click();
    await this.wholeBeanCoffees.click();
    await this.hondorusCoffe.click();
    await this.wholeBeanCoffeeType.click();
    await this.weightCoffee1k.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")

    await this.traumBlendCoffee.click();
    await this.weightCoffee1k.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart") 
    
    await this.capsulesCofee.waitFor({ timeout: 5000 });
    await this.capsulesCofee.click();
    await this.chocoColombiaCap.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")

    await this.traumBlendCap.waitFor({ timeout: 5000 });
    await this.traumBlendCap.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")
    
    await this.dripCofees.waitFor({ timeout: 5000 });
    await this.dripCofees.click();
    await this.elSalvadorDripCoffee.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")
    
    await this.burundiDripCoffee.waitFor({ timeout: 5000 });
    await this.burundiDripCoffee.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")
    
    await this.burundiSingleDrip.waitFor({ timeout: 5000 });
    await this.burundiSingleDrip.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")
    
    await this.elSalvadorSingleDrip.waitFor({ timeout: 5000 });
    await this.elSalvadorSingleDrip.click();
    await this.addToBasket.click();
    await this.waitForElementWithText("Added to cart")

}
async CompleteYourOrder(){
    await this.page.waitForTimeout(5000);
    await this.completeOrder.click();
    await this.page.waitForTimeout(5000);
    await this.page.waitForSelector('#shippingName', { timeout: 10000 });
    await this.emailShipping.click();
    await this.emailShipping.type("cemtalasgir@gmail.com");
    await this.fullnameShipping.click({ timeout: 10000 });
    await this.fullnameShipping.type("Cem Talasgir");
    await this.adresslineShipping.click({ timeout: 10000 });
    await this.adresslineShipping.type("Edirne, Turkey");
    await this.adressline2Shipping.click({ timeout: 10000 });
    await this.adressline2Shipping.type("Edirne, Turkey");
    await this.selectShippingArea.click();
    await this.selectShippingArea.selectOption({ value: "أبو ظبي" });
    await this.phoneNumberShipping.click({ timeout: 10000 });
    await this.phoneNumberShipping.type("+90 5552596355");
    await this.cardNumShipping.click({ timeout: 10000 });
    await this.cardNumShipping.type("4242424242424242");
    await this.cardExpShipping.click({ timeout: 10000 });
    await this.cardExpShipping.type("1030");
    await this.cardCVCShipping.click({ timeout: 10000 });
    await this.cardCVCShipping.type("777");
    await this.payShipping.click({ timeout: 20000 });
    const checkOrderedSuccessfully = this.page.locator('text=Your Order is Placed!');
    await checkOrderedSuccessfully.waitFor({ timeout: 60000 });
}

}
module.exports = {OrderCoffeePage};