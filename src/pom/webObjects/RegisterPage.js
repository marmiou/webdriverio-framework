var elements = require('../elements');

class RegisterPage{

    get nameInput() {
        return $(elements.register.nameInput);
    }

    get emailInput() {
        return $(elements.register.emailInput);
    }

    get passwdInput() {
        return $(elements.register.passwdInput);
    }

    get passwdConfirmInput() {
        return $(elements.register.passwdConfirmInput);
    }

    get joinBtn() {
        return $(elements.register.joinBtn);
    }

    get flashMsg() {
        return $(elements.register.flashMsg);
    }

    setName(name) {
        return this.nameInput.setValue(name);
    }

    setEmail(email) {
        return this.emailInput.setValue(email);
    }

    setPasswd(passwd) {
        return this.passwdInput.setValue(passwd);
    }

    setPasswdConfirm(passwdConfirm) {
        return this.passwdConfirmInput.setValue(passwdConfirm);
    }

    clickJoinBtn() {
        return this.joinBtn.click();
    };

    fillRegistrationForm(name, email, passwd, passwdConfirm) {
        if(name) {
            this.nameInput.setValue(name);
        }
        if(email) {
            this.emailInput.setValue(email);
        }
        if(passwd) {
            this.passwdInput.setValue(passwd);
        }
        if(passwdConfirm) {
            this.passwdConfirmInput.setValue(passwdConfirm);
        }
        this.joinBtn.click();
    }

    confirmUnsuccessfulRegistration() {
        var validateFlash = browser.waitUntil( () => {
            return browser.getText(elements.register.flashMsg)=== 'REGISTRATION FAILED. PLEASE TRY AGAIN'
        }, 5000);
        expect(validateFlash, 'Unsuccessful Registration Message Does Not Exist!').to.be.true;
    }
}

module.exports =  new RegisterPage();


