const {Given, When } = require ('@wdio/cucumber-framework');
const {pages} = require ('./../pageobject');

Given('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

When ('I click {string} icon', function(icon){
  return pages("first").headerComponent.searchIcon(icon).click(); 
});
