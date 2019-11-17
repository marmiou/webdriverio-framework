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

    get saveBtn() {
        return $(elements.edibles.saveBtn);
    }

    get toggleFilterBtn() {
        return $(elements.edibles.toggleFilterBtn);
    }

    get addNameInput() {
        return $(elements.edibles.addNameInput);
    }

    get addCaloriesInput() {
        return $(elements.edibles.addCaloriesInput);
    }

    get namesList() {
        return $(elements.edibles.namesList);
    }

    clickAddBtn() {
        return this.addBtn.click();
    }

    setName(name) {
        return this.addNameInput.setValue(name);
    }

    setCalories(calories) {
        return this.addNameInput.setValue(calories);
    }

    clickSaveBtn() {
        return this.saveBtn.click();
    }

    addRecord(name, calories){
        if (name) {
            this.addNameInput.setValue(name);
        }
        if(calories) {
            this.addCaloriesInput.setValue(calories);
        }
        this.clickSaveBtn();
    }

    findRecordByOption(name) {
        let namesList = this.namesList;
        let count = browser.$$(namesList).value.length;
        var found = false;

        for (let i = 0; i < count; i++) {
            let markella = browser.$$(namesList).getAttribute('innerText');
            console.log(markella);
            if (browser.element(namesList).getAttribute('innerText') === name.toString()) {
                found = true;
                console.log(found);
                return found
            }
        }
    }

    verifyAddNameInput() {
        var addName = browser.waitUntil( () => {
            return this.addNameInput.isExisting() === true
        }, 3000);
        expect(addName, 'Add name input does not exist on the page').to.be.true;
    }

    verifyAddCaloriesInput() {
        var addCal = browser.waitUntil( () => {
            return this.addCaloriesInput.isExisting() === true
        }, 3000);
        expect(addCal, 'Add calories input does not exist on the page').to.be.true;
    }

    verifyAddedRecord(name) {
        console.log('1');
        var validateAddedRecord = browser.waitUntil( () => {
            return this.findRecordByOption(name)
        }, 3000);
        console.log('4');
        expect(validateAddedRecord, 'Record could not be found').to.be.true;
    }
}

module.exports = new EdiblesPage();