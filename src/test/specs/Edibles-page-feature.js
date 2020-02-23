var loginPage = require("../../pom/webObjects/loginPage");
var sideMenu = require("../../pom/webObjects/sideMenu");
var ediblesPage = require("../../pom/webObjects/ediblesPage");
var literals = require("../../pom/literals");


before(() => {
    // todo:following general browser wdio functions that may be used in all Pages could be moved to a Parent Object and
    //  all pages could inherit from and extend their functionality
    //browser.url('/login');
    browser.url('');
    browser.pause(3000);
    //loginPage.fillLoginForm('mickey@mickey.com', '12345678');
    loginPage.fillLoginForm(literals.login.validEmail, literals.login.validPassword);
    sideMenu.confirmGreetings();
});

describe('Feature: Verify Add/Edit/Delete functionality in Edibles Page', () => {

    it('Should verify that user can Add a record', () => {
        ediblesPage.clickAddBtn();
        ediblesPage.verifyAddNameInput();
        ediblesPage.verifyAddCaloriesInput();
        ediblesPage.addRecord(literals.edibles.almonds, literals.edibles.almondsCalories);
        ediblesPage.verifyAddedRec(literals.edibles.almonds);
    });

    //wip
    it.skip('Should verify that user can Edit an existing record', () => {

    });

    //wip
    it.skip('Should verify that user can Delete an existing record', () => {

    });
});