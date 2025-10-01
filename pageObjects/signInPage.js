const { test, expect } = require('@playwright/test');



class SignInPage {

  constructor(page)
{
    this.page = page;
    this.signInBtn = page.locator("#account-btn");
    this.emailBox = page.locator("//div[@class='relative']//input[@id='email']");
    this.passwordBox = page.locator("#password");
    this.signInAfterData = page.locator("button[aria-label='save button']");
    this.checkErrorMessage = page.locator("h2[class='mt-2 text-[14px] max-w-xs']");
    this.errorMessageWrongSign = page.locator("div[role='alert'] div:nth-child(2)");
    this.signUpBtn = page.locator("//button[@id='sign-up-btn']//a");
    this.createAnAccoumtBtn = page.locator("#create-account-btn");
    this.firstNameBox = page.locator("#name");
    this.lastNameBox = page.locator("#last-name");
    this.emailAdressBox = page.locator("(//input[@id='email'])[1]");
    this.passwordCreateBox = page.locator("(//input[contains(@placeholder,'Password')])[1]");
    this.passwordCreateBox2 = page.locator("(//input[contains(@placeholder,'Password')])[2]"); 
    this.signUpBtn02 = page.locator("//button[normalize-space()='SIGN UP']");

    this.forgetPasswordBtn = page.locator("#forgot-password");
    this.forgetEmailBtn = page.locator("#email");
    this.sendEmailBtn = page.locator("#sent-btn");

    this.myAccountBtn = page.locator("#account-btn");
    this.signOutBtn = page.locator("(//a[normalize-space()='Sign Out'])[1]");

}
//(//div[contains(text(),'Successfully Logged In')])[1]

async SignCorrect()
{
    const email = "emine.tsiligkir@ronwell.net";
    //const wrongPassword = "emine123456";
    await this.page.waitForTimeout(2000);
    await this.signInBtn.click();
    await this.emailBox.click();
    await this.emailBox.type(email);
    await this.passwordBox.click();
    await this.passwordBox.type("Asdfghjkl123");
    await this.signInAfterData.click();
    const checkCorrectMessage = this.page.locator("text=Successfully Logged In");
}
/*async LogoutFromAccount()
{
   await this.myAccountBtn.click();
   await this.signOutBtn.click();
}*/

async SignInWithoutChar()
{
    const email = "emine.tsiligkir@ronwell.net";
    const wrongPassword = "emine123456";
    await this.page.waitForTimeout(2000);
    await this.signInBtn.click();
    await this.emailBox.click();
    await this.emailBox.type(email);
    await this.passwordBox.click();
    await this.passwordBox.type(wrongPassword);
    await this.signInAfterData.click();
    await expect(this.checkErrorMessage).toHaveText('Password must contain at least 8 characters, including uppercase, lowercase letters and numbers!');
    console.log("Try to login without 8 characters.");
}

async SignInWrongChar()
{
    const email = "emine.tsiligkir@ronwell.net";
    const wrongPassword = "Asdfghjkl123456";
    await this.page.waitForTimeout(2000);
    await this.signInBtn.click();
    await this.emailBox.click();
    await this.emailBox.type(email);
    await this.passwordBox.click();
    await this.passwordBox.type(wrongPassword);
    await this.signInAfterData.click();
    await expect(this.errorMessageWrongSign).toHaveText('Something went wrong');
    console.log("Try to login with wrong 8 characters.");
}
 generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for(let i = 0; i < 10; i++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    return `${string}@ronwell.net`;
  }
async SignUp()
{
    const firstName= "Cem";
    const lastName = "Talasagir";
    const email = "emine.tsiligkir@ronwell.net";
    const password01 = "Asdfghj1234";
    await this.page.waitForTimeout(2000);
    await this.signInBtn.click();
    await this.signUpBtn.click();
    await this.firstNameBox.click();
    await this.firstNameBox.type(firstName);
    await this.lastNameBox.click();
    await this.lastNameBox.type(lastName);
    await this.emailAdressBox.click();
    await this.emailAdressBox.type(this.generateRandomEmail());
    await this.passwordCreateBox.click();
    await this.passwordCreateBox.type(password01);
    await this.passwordCreateBox2.click();
    await this.passwordCreateBox2.type(password01);
    //await this.signUpBtn02.click();
    console.log("Successfully sign up.");
}

async ForgotPassword(){
    await this.page.waitForTimeout(2000);
    await this.signInBtn.click();
    await this.forgetPasswordBtn.click();
    await this.forgetEmailBtn.click();
    await this.forgetEmailBtn.type("emine.tsiligkir@ronwell.net");
    await this.sendEmailBtn.click();
    const forgetPasswordMessage = this.page.locator('text=Please Check Your Mail');
        await forgetPasswordMessage.waitFor({ timeout: 5000 });
}
  
}
module.exports = {SignInPage};