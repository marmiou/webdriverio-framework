var elements = require('../elements');

class EdiblesPage {

    get edibleHeader() {
        return $(elements.edibles.edibleH);
    }

    get caloryBox() {
        return $(elements.edibles.caloryBox);
    }

    get toggleFilterBtn() {
       return $(elements.edibles.toggleFilterBtn);
    }

    get addBtn() {
        return $(elements.edibles.addBtn);
    }



}

module.exports = new EdiblesPage();