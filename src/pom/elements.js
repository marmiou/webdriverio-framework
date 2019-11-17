module.exports = {

    launch: {
        registerBtn: '#root > div > div:nth-child(2) > div > div > div:nth-child(3) > a > button',
        loginBtn: '#root > div > div:nth-child(2) > div > div > div:nth-child(5) > a > button',
        buttons: 'div > div > div > a > button',
        title: 'header > h1 > a',
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
    },



};

