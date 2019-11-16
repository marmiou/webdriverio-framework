var elements = require('../elements');

class Edibles {

    get edibleHeader() {
        return $(elements.edibles.edibleH);
    }

    get greeting() {
        return $(elements.edibles.greeting);
    }

    confirmEdiblesView() {
        var validateGreeting = browser.waitUntil( () => {
            return this.greeting.isExisting() == true
        }, 3000);
        expect(validateGreeting, 'Registration did not succeed!').to.be.true;
    }
}

module.exports = new Edibles();