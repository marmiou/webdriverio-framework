var loginPage = require("../../pom/webObjects/loginPage");
var sideMenu = require("../../pom/webObjects/sideMenu");
var launchPage = require("../../pom/webObjects/launchPage");

beforeEach(() => {

    browser.url('/login');
    browser.pause(3000);
});

describe('Feature: Verify Logout and Login Functionality', () => {

    it('Should verify that user can login from launch page and then logout from the account', () => {
        launchPage.confirmLaunchTitle();
        launchPage.clickLoginBtn();
        loginPage.fillLoginForm('mickey@mickey.com', '12345678');
        sideMenu.confirmGreetings();
        sideMenu.clickMenuBtn('logout');
        launchPage.confirmLaunchTitle();
    });

    it('Should verify that user can re-login from the login page', () => {
        loginPage.fillLoginForm('mickey@mickey.com', '12345678');
        sideMenu.confirmGreetings();
    });
});