var LoginPage = require("../../pom/webObjects/LoginPage");
var SideMenu = require("../../pom/webObjects/SideMenu");
var LaunchPage = require("../../pom/webObjects/LaunchPage");

beforeEach(() => {

    //hook to login and launch Edibles page
    browser.url('/login');
    browser.pause(3000);
    LoginPage.fillLoginForm('mickey@mickey.com', '12345678');
    SideMenu.confirmGreetings();
});

describe('Feature: Verify Add/Edit/Delete functionality in Edibles Page', () => {

    it('Should verify that user can Add a record', () => {
        
    });

    it('Should verify that user can Edit a record', () => {

    });

    it('Should verify that user can Delete a record', () => {

    });
});