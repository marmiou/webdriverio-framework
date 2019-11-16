var Register = require("../../pom/webObjects/Register");
var Edibles = require("../../pom/webObjects/Edibles");

//todo: move hook code to pom as well
beforeEach(() => {
    var title =  '#root > div > div:nth-child(2) > div > div > h2';
    var registerBtn = '#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button';

    browser.url('/');
    browser.waitForExist(title, 4000, false);
    browser.click(registerBtn);
});

describe('Feature: Verify Register Form Functionality', () => {
    it('Should verify that user cannot Register when password is less than 8 characters', () => {

        Register.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 1234567, 1234567);
        //Register.confirmUnsuccessfulRegistration();
    });

    it('Should verify that user cannot Register when password is less than 8 characters', () => {

        Register.fillRegistrationForm('mickie mouse', 'mickie@mickie.com', 12345678, 1234567);
        //Register.confirmUnsuccessfulRegistration();
    });

    //Following successful Register scenario can run only if we reset the data set of the testing environment before
    //each execution. Added here for demonstration purposes
    it('Should verify that user can Register with valid fields', () => {

        Register.fillRegistrationForm('mary loua', 'mary@loua.com', 12345678, 12345678);
        Edibles.confirmEdiblesView();
    });
});