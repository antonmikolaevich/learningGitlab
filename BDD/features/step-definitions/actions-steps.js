const {Given, Then } = require ('@wdio/cucumber-framework');
const {pages} = require ('../PageObject/pages/index');

Given('I open {string} page', function(pageName) {
    return pages(pageName).open();
});