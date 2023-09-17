const {Given} = require ('@wdio/cucumber-framework');
const {page} = require ('./features/pageobject');

Given('I open {string} page', function(pageName) {
    return page(pageName).open();
})