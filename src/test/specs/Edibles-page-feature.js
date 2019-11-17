var LoginPage = require("../../pom/webObjects/LoginPage");
var SideMenu = require("../../pom/webObjects/SideMenu");
var EdiblesPage = require("../../pom/webObjects/EdiblesPage");


before(() => {
    // todo:following general browser wdio functions that may be used in all Pages could be moved to a Parent Object and
    //  all pages could inherit from and extend their functionality
    browser.url('/login');
    browser.pause(3000);
    LoginPage.fillLoginForm('mickey@mickey.com', '12345678');
    SideMenu.confirmGreetings();
});

describe('Feature: Verify Add/Edit/Delete functionality in Edibles Page', () => {

    it('Should verify that user can Add a record', () => {
        EdiblesPage.clickAddBtn();
        EdiblesPage.verifyAddNameInput();
        EdiblesPage.verifyAddCaloriesInput();
        EdiblesPage.addRecord('Almonds', 200);
        EdiblesPage.verifyAddedRecord('Almonds');
    });

    //wip
    it.skip('Should verify that user can Edit an existing record', () => {

    });

    //wip
    it.skip('Should verify that user can Delete an existing record', () => {

    });
});