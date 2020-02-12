var registerPage = require("../../pom/webObjects/registerPage");
var sideMenu = require("../../pom/webObjects/sideMenu");


beforeEach(() => {
    var title =  'div:nth-child(2)  h2';
    var registerBtn = 'div:nth-child(3) button';

    browser.url('/');
    browser.waitForExist(title, 4000, false);
    browser.click(registerBtn);
});

describe('Feature: Verify Register Form Functionality', () => {
    it('Should verify that user cannot Register when password is less than 8 characters', () => {

        registerPage.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 1234567, 1234567);
        registerPage.confirmUnsuccessfulRegistration();
    });

    it('Should verify that user cannot Register when password confirmation fails', () => {

        registerPage.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 12345678, 1234567);
        registerPage.confirmUnsuccessfulRegistration();
    });

    //Following successful Register scenario can run only if we reset the data set of the testing environment before
    //each execution. Added here for demonstration purposes
    it('Should verify that user can Register with valid fields', () => {

        registerPage.fillRegistrationForm('mary loi', 'mary@loi.com', 12345678, 12345678);
        sideMenu.confirmGreetings();
    });
});