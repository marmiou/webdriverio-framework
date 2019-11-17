var elements = require('../elements');

class LaunchPage {

    get registerBtn() {
        return $(elements.launch.registerBtn);
    }

    get loginBtn() {
        return $(elements.launch.loginBtn);
    }

    get buttonsList() {
        return $(elements.launch.buttons);
    }

    get title() {
        return $(elements.launch.title);
    }

    clickLoginBtn() {
        return this.loginBtn.click();
    }

    clickRegisterBtn() {
        return this.registerBtn.click();
    }

    confirmLaunchTitle() {
        console.log(this.launchTitle);
        var validateTitle = browser.waitUntil( () => {
            return browser.getText(elements.launch.title) === 'Welcome to Calc'
        }, 3000);
        expect(validateTitle, 'Unsuccessful Registration Message Does Not Exist!').to.be.true;
    }
}

module.exports = new LaunchPage();