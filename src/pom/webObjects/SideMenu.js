var elements = require('../elements');

class SideMenu {

    get greeting() {
        return $(elements.sideMenu.greeting);
    }

    get ediblesBtn() {
        return $(elements.sideMenu.ediblesBtn);
    }

    get profileBtn() {
        return $(elements.sideMenu.profileBtn);
    }

    get logoutBtn() {
        return $(elements.sideMenu.logoutBtn);
    }

    clickMenuBtn(option) {
        if(option === 'edibles') {
            return this.ediblesBtn.click();
        }
        if(option === 'profiles') {
            return this.profileBtn.click();
        }
        if(option === 'logout') {
            return this.logoutBtn.click();
        }
    };

    confirmGreetings() {
        var validateGreeting = browser.waitUntil( () => {
            return this.greeting.isExisting() === true
        }, 3000);
        expect(validateGreeting, 'Registration did not succeed!').to.be.true;
    };
}

module.exports = new SideMenu();