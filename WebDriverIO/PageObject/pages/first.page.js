const BasePage = require ('./base.page');
const SearchPanel = require('./../components/searchpanel.component');

class FirstPage extends BasePage {

  constructor(){
    super ('https://www.epam.com/')
    this.searchPanel = new SearchPanel();
  }
   
}

module.exports = FirstPage;
