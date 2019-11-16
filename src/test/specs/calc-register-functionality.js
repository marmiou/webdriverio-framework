beforeEach(() => {
    var title =  '#root > div > div:nth-child(2) > div > div > h2';
    var registerBtn = '#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button';

    browser.url('/');
    browser.waitForExist(title, 8000, false);
    browser.click(registerBtn);
});

describe('Feature: Verify Register Form Functionality', () => {
    it('Should verify that user cannot register with an empty name field', () =>{
        // registerBtn: #root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button
        // loginBtn: #root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button
        // twoBtns: div > div > div > a > button

        // browser.url('/');
        // browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');
        var nameInput = '#name-input';
        var emailInput = '#email-input';
        var passwdInput = '#password-input';
        var passwdConfirm = '#password-confirmation-input';
        var joinBtn = '.button';


        browser.setValue(nameInput, 'Mickey Mouse');
        browser.setValue(emailInput, 'mickey@mickey.com');
        browser.setValue(passwdInput, '12345678');
        browser.setValue(passwdConfirm, '12345678');
        browser.click(joinBtn);

    });

    it('Should verify that user cannot register with an empty email field', () => {
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#password-input', '12345678');
        browser.setValue('#password-confirmation-input', '12345678');
        browser.click('.button');
    });

    it('Should verify that user cannot register with an invalid email', () =>{
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#email-input', 'mickey');
        browser.setValue('#password-input', '12345678');
        browser.setValue('#password-confirmation-input', '12345678');
        browser.click('.button');
    });

    it('Should verify that user cannot register with an empty password field', () =>{
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#email-input', 'mickey@mickey.com');
        browser.setValue('#password-confirmation-input', '12345678');
        browser.click('.button');
    });

    it('Should verify that user cannot register when password confirmation fails', () =>{
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#email-input', 'mickey@mickey.com');
        browser.setValue('#password-input', '12345678');
        browser.setValue('#password-confirmation-input', '123456789');
        browser.click('.button');
    });

    it('Should verify that user cannot register when password is less than 8 characters', () =>{
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#email-input', 'mickey@mickey.com');
        browser.setValue('#password-input', '1234567');
        browser.setValue('#password-confirmation-input', '1234567');
        browser.click('.button');

    });

    it('Should verify that user can register with valid fields', () => {
        //browser.click('#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button');

        browser.setValue('#name-input', 'Mickey Mouse');
        browser.setValue('#email-input', 'mickey@mickey.com');
        browser.setValue('#password-input', '12345678');
        browser.setValue('#password-confirmation-input', '12345678');
        browser.click('.button');
    });

});