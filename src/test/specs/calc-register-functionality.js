var RegisterPage = require("../../pom/webObjects/RegisterPage");
var SideMenu = require("../../pom/webObjects/SideMenu");


beforeEach(() => {
    var title =  '#root > div > div:nth-child(2) > div > div > h2';
    var registerBtn = '#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button';

    browser.url('/');
    browser.waitForExist(title, 4000, false);
    browser.click(registerBtn);
});

describe('Feature: Verify Register Form Functionality', () => {
    it('Should verify that user cannot Register when password is less than 8 characters', () => {

        RegisterPage.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 1234567, 1234567);
        RegisterPage.confirmUnsuccessfulRegistration();
    });

    it('Should verify that user cannot Register when password confirmation fails', () => {

        RegisterPage.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 12345678, 1234567);
        RegisterPage.confirmUnsuccessfulRegistration();
    });

    //Following successful Register scenario can run only if we reset the data set of the testing environment before
    //each execution. Added here for demonstration purposes
    it('Should verify that user can Register with valid fields', () => {

        RegisterPage.fillRegistrationForm('mary loua', 'mary@loua.com', 12345678, 12345678);
        SideMenu.confirmGreetings();
    });
});