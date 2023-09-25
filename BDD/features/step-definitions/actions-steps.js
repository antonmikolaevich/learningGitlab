const {Given, When } = require ('@wdio/cucumber-framework');
const {pages} = require ('./../pageobject');

Given('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

When ('I click {string} icon', async function(icon){
  return pages("first").headerComponent.searchIcon(icon).click(); 
});

When ('I type JavaScript value in {string} field', function(field){
    return pages('first').searchPanel.inputSearch(field); 
  });

When ('I type DevOps value in {string} field', function(field){
    return pages('first').searchPanel.inputSearch(field); 
  });

When ('I type Java value in {string} field', function(field){
    return pages('first').searchPanel.inputSearch(field); 
  });

When ('I click {string} button', function(button){
    return pages('first').searchPanel.findBtn(button).click(); 
  });
