const BasePage = require ('./base.page');
const SearchPanel = require('./../components/searchpanel.component');
const HeaderComponent = require ('./../components/header.component');


class FirstPage extends BasePage {

  constructor(){
    super ('https://www.epam.com/')
    this.searchPanel = new SearchPanel();
    this.headerComponent = new HeaderComponent();
  }
   
}

module.exports = FirstPage;
