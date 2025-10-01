const { test, expect } = require('@playwright/test');
const {AboutPage} = require('../pageObjects/aboutPage');
const {SignInPage} = require('../pageObjects/signInPage');
const {OrderCoffeePage} = require('../pageObjects/orderPage');
const {LearnPage} = require('../pageObjects/learnPage');
const {BecomeOurPartnerPage} = require('../pageObjects/becomeOurPartnerPage');
const {WholeSalePage} = require('../pageObjects/wholeSalePage');

    test.beforeEach(async ({page}) => {
      await page.goto('https://dev.traumkaffee.com/');
    }); 
//Sign IN/OUT test cases--------------------------------------------------
    test('Sign In without 8 characters', async({page})=>
      {
        const signInPage = new SignInPage(page);
        await signInPage.SignInWithoutChar();
      });

    test('Sign In with wrong password 8 characters', async({page})=>
      {
        const signInPage = new SignInPage(page);
        await signInPage.SignInWrongChar();
      });

    test('Sign Up ', async({page})=>
      {
        const signInPage = new SignInPage(page);
        await signInPage.SignUp();
      });

    test('Forgot Password ', async({page})=>
      {
        const forgetPassword = new SignInPage(page);
        await forgetPassword.ForgotPassword();
      });

    test('Sign In Correctly', async({page})=>
      {
        const signInCorrectPage = new SignInPage(page);
        await signInCorrectPage.SignCorrect();
      });
//Coffee order test cases--------------------------------------------------
    test('Order Coffee ', async({page})=>
      {
        test.setTimeout(60000);
        const orderPage = new OrderCoffeePage(page);
        await orderPage.OrderCoffee();
        await orderPage.CompleteYourOrder();
      });
      
//Learn menu pages test cases--------------------------------------------------
    test('Learn page check ', async({page})=>
      {
        const learnPage01 = new LearnPage(page);
        await learnPage01.LearnCoffePage();
      });
    test('Blog page check ', async({page})=>
      {
        const learnPage02 = new LearnPage(page);
        await learnPage02.BlogPage();
      });
//Become our Partner menu test cases--------------------------------------------------
    test('Become our Partner check. ', async({page})=>
      {
        const becomePartner = new BecomeOurPartnerPage(page);
        await becomePartner.BecomeOurPartners();
      });
//About Menu page test cases--------------------------------------------------
    test('About contact page check. ', async({page})=>
      {
        const contactPage = new AboutPage(page);
        await contactPage.ContactPage();
        await contactPage.ContactPageSocial();
      });
    test('About Sustainability page check. ', async({page})=>
      {
        const sustainabilitPage = new AboutPage(page);
        await sustainabilitPage.SustainabilityPage();
      });
    test('About page check. ', async({page})=>
      {
        const aboutPage01 = new AboutPage(page);
        await aboutPage01.AboutPage();
      });
//Wholesale Menu page test cases--------------------------------------------------
    test('Whole sale page check. ', async({page})=>
      {
        const wholeSale = new WholeSalePage(page);
        await wholeSale.WholeSale();
      });