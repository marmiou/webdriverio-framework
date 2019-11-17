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

    get allElements() {
        return $(elements.launch);
    }

    get launchTitle() {
        return $(elements.launch.title);
    }

    selectBtnByTxt(txt){
        let chosenBtn;
        let text = txt;
        let buttonsList = this.buttonsList;
        let count = browser.elements(buttonsList).value.length;

            for (let i = 0; i < count; i++) {
                if (browser.elements(buttonsList).value[i].getText() === text.toString()) {
                    chosenBtn = browser.elements(buttonsList).value[i];
                    console.log(chosenBtn);
                    browser.elements(chosenBtn).click();
                    break;
                }
            }
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