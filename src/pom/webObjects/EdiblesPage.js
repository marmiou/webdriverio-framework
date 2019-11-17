var elements = require('../elements');

class EdiblesPage {

    get edibleHeader() {
        return $(elements.edibles.edibleH);
    }

    get caloryBox() {
        return $(elements.edibles.caloryBox);
    }

    get addBtn() {
        return $(elements.edibles.addBtn);
    }

    get editBtn() {
        return $(elements.edibles.editBtn);
    }

    get deleteBtn() {
        return $(elements.edibles.deleteBtn);
    }

    get toggleFilterBtn() {
        return $(elements.edibles.toggleFilterBtn);
    }

}

module.exports = new EdiblesPage();