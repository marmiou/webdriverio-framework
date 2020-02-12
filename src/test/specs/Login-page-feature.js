var LoginPage = require("../../pom/webObjects/LoginPage");
var SideMenu = require("../../pom/webObjects/SideMenu");
var LaunchPage = require("../../pom/webObjects/LaunchPage");

beforeEach(() => {

    browser.url('/login');
    browser.pause(3000);
});

describe('Feature: Verify Logout and Login Functionality', () => {

    it('Should verify that user can login from launch page and then logout from the account', () => {
        LaunchPage.confirmLaunchTitle();
        LaunchPage.clickLoginBtn();
        LoginPage.fillLoginForm('mickey@mickey.com', '12345678');
        SideMenu.confirmGreetings();
        SideMenu.clickMenuBtn('logout');
        LaunchPage.confirmLaunchTitle();
    });

    it('Should verify that user can re-login from the login page', () => {
        LoginPage.fillLoginForm('mickey@mickey.com', '12345678');
        SideMenu.confirmGreetings();
    });
});