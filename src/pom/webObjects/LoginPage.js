var elements = require('../elements');

//todo: Noticed that Register Page extends Login page, so it could inherit from RegisterPage
class LoginPage {

    get emailInput() {
        return $(elements.login.emailInput);
    }

    get passwdInput() {
        return $(elements.login.passwdInput);
    }

    get joinBtn() {
        return $(elements.login.joinBtn);
    }

    get flashMsg() {
        return $(elements.login.flashMsg);
    }

    setEmail(email) {
        return this.emailInput.setValue(email);
    }

    setPasswd(passwd) {
        return this.passwdInput.setValue(passwd);
    }

    clickJoinBtn() {
        return this.joinBtn.click();
    }

    fillLoginForm(email, passwd) {
        if(email) {
            this.emailInput.setValue(email);
        }
        if(passwd) {
            this.passwdInput.setValue(passwd);
        }
        this.joinBtn.click();
    }
}

module.exports = new LoginPage();