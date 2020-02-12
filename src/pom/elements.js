module.exports = {

    launch: {
        registerBtn: 'div:nth-child(3) button',
        loginBtn: 'div:nth-child(5) button',
        buttons: 'button',
        title: 'h1 > a',
        subtitle: 'h2',
    },

    register: {
        nameInput: '#name-input',
        emailInput: '#email-input',
        passwdInput: '#password-input',
        passwdConfirmInput: '#password-confirmation-input',
        joinBtn: '.button',
        flashMsg: '.flash',
    },

    login: {
        emailInput: '#email-input',
        passwdInput: '#password-input',
        joinBtn: '.button',
        flashMsg: '.flash',
    },

    sideMenu: {
        greeting : '[data-ui="greeting"]',
        ediblesBtn: '[data-ui="edibles-btn"]',
        profileBtn: '[data-ui="profile-btn"]',
        logoutBtn: '[data-ui="logout-btn"]',

    },

    edibles: {
        edibleH :'[data-ui="table-header"]',
        caloryBox: '[data-ui="calory-box"]',
        toggleFilterBtn: '[data-ui="toggle-filter-btn"]',
        addBtn: '[data-ui="add-btn"]',
        editBtn: '[data-ui="edit-btn"]',
        deleteBtn: '[data-ui="delete-btn"]',
        saveBtn: '[data-ui="save-btn"]',
        addNameInput: '[name="name"]',
        addCaloriesInput: '[name="calories"]',
        namesList: 'div:nth-child(2) td:nth-child(1)',
    },



};

